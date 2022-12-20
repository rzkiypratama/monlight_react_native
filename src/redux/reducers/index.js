import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth';
import productReducer from './product';
import transactionReducer from './transaction';
import userReducer from "./user";

export default combineReducers({
  auth: authReducer,
  profile: userReducer,
  product: productReducer,
  transaction: transactionReducer,
});