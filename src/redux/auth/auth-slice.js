import { createSlice } from '@reduxjs/toolkit';

import operations from './auth-operations';

const initialState = {
  user: { email: null, name: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export default authSlice.reducer;
