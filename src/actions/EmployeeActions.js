import { EMPLOYEE_UPDATED } from '../types';

export const employeeUpdated = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATED,
  payload: { prop, value }
});
