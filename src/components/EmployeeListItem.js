import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class EmployeeListItem extends Component {

  rowClicked() {
    Actions.editEmployee({ employee: this.props.item });
  }

  render() {
      const employee = this.props.item;
      return (
        <TouchableOpacity onPress={this.rowClicked.bind(this)}>
          <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>{employee.name}</Text>
          </View>
        </TouchableOpacity>
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
