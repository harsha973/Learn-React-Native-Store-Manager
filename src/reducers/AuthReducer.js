import { EMAIL_ENTERED, PASSWORD_ENTERED } from '../types';

const initialState = {
  email: '',
  password: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_ENTERED:
      return { ...state, email: action.text };
    case PASSWORD_ENTERED:
      return { ...state, password: action.text };
    default:
      return state;
  }
};
