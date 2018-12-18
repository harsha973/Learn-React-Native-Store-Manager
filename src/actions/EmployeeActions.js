import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import {
  EMPLOYEE_UPDATED,
  EMPLOYEE_CREATED,
  CREATE_EMPLOYEE
} from '../types';

export const employeeUpdated = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATED,
  payload: { prop, value }
});

export const createEmployee = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return ((dispatch) => {
    dispatch({ type: CREATE_EMPLOYEE });
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
          Actions.pop();
          dispatch({ type: EMPLOYEE_CREATED });
      });
  });
};
