import { EMAIL_ENTERED, PASSWORD_ENTERED } from '../types';

export const emailChanged = (text) => ({
  type: EMAIL_ENTERED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: PASSWORD_ENTERED,
  payload: text
});
