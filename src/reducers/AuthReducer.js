import {
    EMAIL_ENTERED,
    PASSWORD_ENTERED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE } from '../types';

const initialState = {
  email: '',
  password: '',
  user: null,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_ENTERED:
      return { ...state, email: action.payload };
    case PASSWORD_ENTERED:
      return { ...state, password: action.payload };
    case USER_LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: '' };
      case USER_LOGIN_FAILURE:
        return { ...state, error: action.payload };
    default:
      return state;
  }
};
