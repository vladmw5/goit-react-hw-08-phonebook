import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  sendSignupCredentialsQuery,
  sendLoginCredentialsQuery,
} from './auth-slice';

export const signup = createAsyncThunk('auth/signup', async credentials => {
  try {
    const { data } = await sendSignupCredentialsQuery(credentials);
    return data;
  } catch (error) {}
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await sendLoginCredentialsQuery;
    return data;
  } catch (error) {}
});

const operations = { signup, login };
export default operations;
