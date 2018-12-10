import {
    EMAIL_ENTERED,
    PASSWORD_ENTERED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGIN
  } from '../types';

const initialState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_ENTERED:
      return { ...state, email: action.payload };
    case PASSWORD_ENTERED:
      return { ...state, password: action.payload };
    case USER_LOGIN_SUCCESS:
      return { ...state, ...initialState, user: action.payload, };
    case USER_LOGIN_FAILURE:
      return { ...state, error: action.payload, password: '', loading: false };
    case USER_LOGIN:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
