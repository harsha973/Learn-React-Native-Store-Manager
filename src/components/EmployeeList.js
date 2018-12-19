import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions';
import EmployeeListItem from './EmployeeListItem';
import { Spinner } from './common';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.fetchEmployees();
  }

  renderItem({ item }) {
    return <EmployeeListItem item={item} />;
  }

  renderFlatList() {
    return (<FlatList
      data={this.props.employees}
      renderItem={this.renderItem.bind(this)}
      keyExtractor={(item) => item.uid}
    />);
  }

  renderSpinner() {
    return (
      <View style={styles.spinnerContainerStyle}>
        <Spinner size='large' />
      </View>
    );
  }

  renderContent() {
    if (this.props.loading) {
      return this.renderSpinner();
    }
    return this.renderFlatList();
  }

  render() { return this.renderContent(); }
}

const styles = {
  spinnerContainerStyle: {
    justifyContent: 'center',
    flex: 1
  }
};

const mapStateToProps = state => {
    const employees = _.map(state.employee.employees, (val, uid) => ({ ...val, uid }));
    const { loading } = state.employee;
    return { employees, loading };
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
