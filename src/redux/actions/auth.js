import ACTION_STRING from './actionString';
import { register, login, forgot, reset, logout } from "../../utils/auth";

const registerPending = () => ({
  type: ACTION_STRING.register.concat(ACTION_STRING.pending),
});

const registerRejected = error => ({
  type: ACTION_STRING.register.concat(ACTION_STRING.rejected),
  payload: { error },
});

const registerFulfilled = data => ({
  type: ACTION_STRING.register.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const loginPending = () => ({
  type: ACTION_STRING.login.concat(ACTION_STRING.pending),
});

const loginRejected = error => ({
  type: ACTION_STRING.login.concat(ACTION_STRING.rejected),
  payload: { error },
});

const loginFulfilled = data => ({
  type: ACTION_STRING.login.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const forgotPending = () => ({
  type: ACTION_STRING.forgot.concat(ACTION_STRING.pending),
});

const forgotRejected = error => ({
  type: ACTION_STRING.forgot.concat(ACTION_STRING.rejected),
  payload: { error },
});

const forgotFulfilled = data => ({
  type: ACTION_STRING.forgot.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const resetPending = () => ({
  type: ACTION_STRING.reset.concat(ACTION_STRING.pending),
});

const resetRejected = error => ({
  type: ACTION_STRING.reset.concat(ACTION_STRING.rejected),
  payload: { error },
});

const resetFulfilled = data => ({
  type: ACTION_STRING.reset.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const logoutPending = () => ({
  type: ACTION_STRING.logout.concat(ACTION_STRING.pending),
});

const logoutRejected = error => ({
  type: ACTION_STRING.logout.concat(ACTION_STRING.rejected),
  payload: { error },
});

const logoutFulfilled = data => ({
  type: ACTION_STRING.logout.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const registerThunk = (body, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(registerPending());
      // console.log('redux', body);
      const result = await register(body);
      dispatch(registerFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(registerRejected(error));
      // console.log(error);
      typeof cbDenied === "function" && cbDenied(error.response.data.msg);
    }
  };
};


const loginThunk = (body, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(loginPending());
      // console.log('redux', body);
      const result = await login(body);
      dispatch(loginFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(loginRejected(error));
      // console.log(error);
      typeof cbDenied === "function" && cbDenied(error.response.data.msg);
    }
  };
};

const forgotThunk = (body, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(forgotPending());
      console.log('redux', body);
      const result = await forgot(body);
      dispatch(forgotFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(forgotRejected(error));
      console.log(error);
      typeof cbDenied === "function" && cbDenied(error.response.data.msg);
    }
  };
};

const resetThunk = (body, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(resetPending());
      console.log('redux', body);
      const result = await reset(body);
      dispatch(resetFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(resetRejected(error));
      console.log(error);
      typeof cbDenied === "function" && cbDenied(error.response.data.msg);
    }
  };
};

const logoutThunk = (token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(logoutPending());
      console.log('redux', token);
      const result = await logout(token);
      dispatch(logoutFulfilled(result.data));
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(logoutRejected(error));
      console.log(error);
      typeof cbDenied === "function" && cbDenied(error.response.data.msg);
    }
  };
};

const resetState = () => {
  return {
    type: ACTION_STRING.authReset,
  };
};

const authAction = {
  registerThunk,
  loginThunk,
  forgotThunk,
  resetThunk,
  logoutThunk,
  resetState,
};

export default authAction;