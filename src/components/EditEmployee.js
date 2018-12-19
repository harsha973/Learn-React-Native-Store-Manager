import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
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

  render() {
    return (
      <View>
        <EmployeeForm {...this.props} />

        <CardSection>
        {this.renderSaveButton()}
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
    const { name, phone, shift, loading } = state.employeeForm;
    return { name, phone, shift, loading };
};

export default connect(mapStateToProps, { employeeUpdated, saveEmployee })(EditEmployee);
