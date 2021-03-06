import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';

const RouterComponent = () => (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='Login'>
          <Scene key='loginForm' component={LoginForm} title='Please login' />
        </Scene>
        <Scene key='employees'>
          <Scene
            key='employeeList'
            component={EmployeeList}
            title='Employees'
            rightTitle='Add'
            onRight={() => { Actions.createEmployee(); }}
            initial
          />
          <Scene key='createEmployee' component={CreateEmployee} title='Create Employee' />
          <Scene key='editEmployee' component={EditEmployee} title='Edit Employee' />
        </Scene>
      </Scene>
    </Router>
  );

export default RouterComponent;
