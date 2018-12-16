import firebase from '@firebase/app';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_ENTERED,
  PASSWORD_ENTERED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN
} from '../types';

export const emailChanged = (text) => ({
  type: EMAIL_ENTERED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: PASSWORD_ENTERED,
  payload: text
});

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
      userLoginStarted(dispatch);
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => userLoginSuccess(dispatch, user))
          .catch(() =>
            firebase.auth().createUserWithEmailAndPassword(email, password)
              .then((user) => userLoginSuccess(dispatch, user))
              .catch(() => userLoginFailure(dispatch))
          );
    };
};

const userLoginSuccess = (dispatch, user) => {
  dispatch({
    type: USER_LOGIN_SUCCESS,
    payload: user
  });

  Actions.employees();
};

const userLoginFailure = (dispatch) => {
  dispatch({
    type: USER_LOGIN_FAILURE,
    payload: 'Authentication failed.'
  });
};

const userLoginStarted = (dispatch) => {
  dispatch({ type: USER_LOGIN });
};
