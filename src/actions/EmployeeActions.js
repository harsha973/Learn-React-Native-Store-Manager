import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import {
  EMPLOYEE_UPDATED,
  EMPLOYEE_CREATED,
  CREATE_EMPLOYEE,
  EMPLOYEES_FETCHED_SUCCESSFULLY,
  EMPLOYEES_FETCH_STARTED,
  EMPLOYEE_SAVED_SUCCESFULLY,
  EMPLOYEE_SAVE_STARTED
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

export const fetchEmployees = () => {
  const { currentUser } = firebase.auth();
  return ((dispatch) => {
    dispatch({ type: EMPLOYEES_FETCH_STARTED });
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCHED_SUCCESSFULLY, payload: snapshot.val() });
      });
  });
};

export const saveEmployee = ({ name, phone, shift, uid }) => ((dispatch) => {
  dispatch({ type: EMPLOYEE_SAVE_STARTED });
  const { currentUser } = firebase.auth();
  firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      Actions.pop();
      dispatch({ type: EMPLOYEE_SAVED_SUCCESFULLY });
    });
});

export const removeEmployee = ({ employeeUid }) => (() => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`users/${currentUser.uid}/employees/${employeeUid}`)
    .remove()
    .then(() => { Actions.pop(); });
});
