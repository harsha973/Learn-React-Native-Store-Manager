import {
  EMPLOYEE_UPDATED,
  EMPLOYEE_CREATED,
  CREATE_EMPLOYEE,
  EMPLOYEE_SAVED_SUCCESFULLY,
  EMPLOYEE_SAVE_STARTED }
 from '../types';

const initialState = {
  name: '',
  phoneNumber: '',
  shift: '',
  loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
      case EMPLOYEE_UPDATED:
        return { ...state, [action.payload.prop]: action.payload.value };
      case CREATE_EMPLOYEE:
      case EMPLOYEE_SAVE_STARTED:
        return { ...state, loading: true };
      case EMPLOYEE_CREATED:
      case EMPLOYEE_SAVED_SUCCESFULLY:
        return initialState;
      default:
        return state;
    }
};
