import {ActionType} from 'redux-promise-middleware';

const ACTION_STRING = {
  register: 'AUTH_REGISTER',
  login: 'AUTH_LOGIN',
  forgot: 'AUTH_FORGOT',
  reset: 'AUTH_RESET',
  logout: 'AUTH_LOGOUT',
  getUser: 'GET_USER',
  editProfile: 'EDIT_PROFILE',
  getProduct: 'GET_PRODUCT',
  getAll: 'GET_ALL',
  getPromo: 'GET_PROMO',
  getDetail: 'GET_DETAIL',
  createTransaction: 'CREATE_TRANSACTION',
  transactionData: 'TRANSACTION_DATA',
  checkout: 'TRANSACTION_CHECKOUT',
  payment: 'TRANSACTION_PAYMENT',
  getHistory: 'GET_HISTORY',
  authReset: 'AUTH_RESET',
  userReset: 'USER_RESET',
  transactionReset: 'TRANSACTION_RESET',
  pending: `_${ActionType.Pending}`,
  fulfilled: `_${ActionType.Fulfilled}`,
  rejected: `_${ActionType.Rejected}`,
};

export default ACTION_STRING;