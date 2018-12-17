import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { EMPLOYEE_UPDATED } from '../types';

export const employeeUpdated = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATED,
  payload: { prop, value }
});

export const createEmployee = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
};
