import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class EmployeeListItem extends Component {

  rowClicked() {
    Actions.editEmployee({ employee: this.props.item });
  }

  render() {
      const employee = this.props.item;
      return (
        <TouchableOpacity onPress={this.rowClicked.bind(this)}>
          <CardSection>
            <Text style={styles.textStyle}>{employee.name}</Text>
          </CardSection>
        </TouchableOpacity>
      );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default EmployeeListItem;
