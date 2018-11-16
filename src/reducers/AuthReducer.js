import { EMAIL_ENTERED } from '../types';

const initialState = { email: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_ENTERED:
      return { ...state, email: action.text };
    default:
      return state;
  }
};
