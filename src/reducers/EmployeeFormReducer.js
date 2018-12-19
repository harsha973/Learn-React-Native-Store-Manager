import {
  EMPLOYEE_UPDATED,
  EMPLOYEE_CREATED,
  CREATE_EMPLOYEE }
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
        console.log('prop is', action.payload.prop, 'value is', action.payload.value);
        return { ...state, [action.payload.prop]: action.payload.value };
      case CREATE_EMPLOYEE:
        return { ...state, loading: true };
      case EMPLOYEE_CREATED:
        return initialState;
      default:
        return state;
    }
};
