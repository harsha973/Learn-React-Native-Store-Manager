import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input, Button } from './common';
import { employeeUpdated } from '../actions';

class CreateEmployee extends Component {

  pickerItems() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const values = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return values.map((value, index) =>
      <Picker.Item
        key={index}
        label={days[index]}
        value={value}
      />
    );
  }

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

        <CardSection style={styles.pickerContainerStyle}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdated({ prop: 'shift', value })}
          >
            {this.pickerItems()}
          </Picker>
        </CardSection>
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    alignSelf: 'center'
  },
  pickerContainerStyle: {
     flexDirection: 'row',
     justifyContent: 'center'
  },
  pickerStyle: {
    flex: 2
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employee;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdated })(CreateEmployee);
