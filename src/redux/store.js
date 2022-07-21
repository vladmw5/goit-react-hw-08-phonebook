import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filterReducer } from './filter/filterReducer';
import authReducer from './auth/auth-slice';
import contactReducer from './contacts/contacts-slice';

// const persistFilterConfig = {
//   key: 'filter',
//   storage,
//   whitelist: ['filter'],
// };

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

// const persistedFilterReducer = persistReducer(
//   persistFilterConfig,
//   filterReducer
// );

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: persistedAuthReducer,
    contacts: contactReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: { ignoreActions: [REHYDRATE] },
    }),
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
