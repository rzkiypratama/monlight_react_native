import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import reducers from './reducers/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(logger)
});

export const persistedStore = persistStore(store);
export default store;