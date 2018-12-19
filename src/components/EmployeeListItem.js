import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EmployeeListItem extends Component {
  render() {
      const employee = this.props.item;
      return (
          <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>{employee.name}</Text>
          </View>
      );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5
  },
  containerStyle: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#ddd'
  }
};

export default EmployeeListItem;
