import {
  EMPLOYEES_FETCHED_SUCCESSFULLY,
  EMPLOYEES_FETCH_STARTED }
from '../types';

const initialState = {
  employees: null,
  loading: false
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case EMPLOYEES_FETCHED_SUCCESSFULLY:
      console.log(actions.payload);
      return { employees: actions.payload, loading: false };
    case EMPLOYEES_FETCH_STARTED:
      return { ...state, loading: true };
    default:
      return state;
  }
};
