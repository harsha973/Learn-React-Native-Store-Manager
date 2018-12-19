import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';
import { Button, CardSection, Spinner } from './common';
import { saveEmployee, employeeUpdated } from '../actions';

class EditEmployee extends Component {

  componentWillMount() {
      _.each(this.props.employee, (value, prop) => {
          this.props.employeeUpdated({ prop, value });
      });
  }

  onTextEmployee() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  savePressed() {
    const { name, phone, shift } = this.props;
    this.props.saveEmployee({ name, phone, shift, uid: this.props.employee.uid });
  }

  renderSaveButton() {
      if (this.props.loading) {
        return (<Spinner size='large' />);
      }
      return (
        <Button onPress={this.savePressed.bind(this)}>Save</Button>);
  }

  renderTextEmployeeSection() {
    return (
      <CardSection>
        <Button onPress={this.onTextEmployee.bind(this)}>Text Schedule</Button>
      </CardSection>
    );
  }

  render() {
    return (
      <View>
        <EmployeeForm {...this.props} />

        <CardSection>
        {this.renderSaveButton()}
        </CardSection>

        {this.renderTextEmployeeSection()}
      </View>
    );
  }
}

const mapStateToProps = state => {
    const { name, phone, shift, loading } = state.employeeForm;
    return { name, phone, shift, loading };
};

export default connect(mapStateToProps, { employeeUpdated, saveEmployee })(EditEmployee);
