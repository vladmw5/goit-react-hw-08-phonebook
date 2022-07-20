import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {
  LOCAL_STORAGE_KEY_FILTER,
  queryFromLocalStorage,
} from 'utils/localStorage';

import { contactsApi } from './contactsApi';

const preloadedState = {
  // contacts: queryFromLocalStorage(LOCAL_STORAGE_KEY_CONTACTS, []),
  filter: queryFromLocalStorage(LOCAL_STORAGE_KEY_FILTER, ''),
};

export const store = configureStore({
  reducer: {},
  // reducer: {
  //   [contactsApi.reducerPath]: contactsApi.reducer,
  //   filter: filterReducer,
  // },
  // preloadedState,
  // devTools: process.env.NODE_ENV !== 'production',
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   contactsApi.middleware,
  // ],
});

setupListeners(store.dispatch);
