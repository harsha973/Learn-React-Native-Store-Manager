import { EMAIL_ENTERED } from '../types';

export const emailChanged = (text) => ({
  type: EMAIL_ENTERED,
  payload: text
});
