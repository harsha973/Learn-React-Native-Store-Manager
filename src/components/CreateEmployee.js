import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input, Button } from './common';
import { employeeUpdated } from '../actions';

class CreateEmployee extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label='Name'
            placeholder='Enter your name'
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdated({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='020-456-3456'
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdated({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employee;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdated })(CreateEmployee);
