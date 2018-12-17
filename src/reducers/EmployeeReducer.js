import { EMPLOYEE_UPDATED } from '../types';

const initialState = {
  name: '',
  phoneNumber: '',
  shift: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
      case EMPLOYEE_UPDATED:
        return { ...state, [action.payload.prop]: action.payload.value };
      default:
        return state;
    }
};
