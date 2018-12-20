import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button, Spinner } from './common';
import { employeeUpdated, createEmployee } from '../actions';
import EmployeeForm from './EmployeeForm';

class CreateEmployee extends Component {

  createUserButton() {
    return (
      <Button onPress={this.createUser.bind(this)}>
      Create
      </Button>);
  }

  createUser() {
    const { name, phone, shift } = this.props;
    this.props.createEmployee({ name, phone, shift: shift || 'Monday' });
  }

  createUserButtonorProgress() {
    const { loading } = this.props;
    if (loading) {
      return (<Spinner size='large' />);
    }
    return (this.createUserButton());
  }

  render() {
    return (
      <View>
        <EmployeeForm {...this.props} />
        <CardSection>
          {this.createUserButtonorProgress()}
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift, loading } = state.employeeForm;
  return { name, phone, shift, loading };
};

export default connect(mapStateToProps, { employeeUpdated, createEmployee })(CreateEmployee);
