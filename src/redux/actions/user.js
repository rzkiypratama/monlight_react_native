import ACTION_STRING from './actionString';
import { getUser, editUser } from "../../utils/user";

const getUserPending = () => ({
  type: ACTION_STRING.getUser.concat(ACTION_STRING.pending),
});

const getUserRejected = error => ({
  type: ACTION_STRING.getUser.concat(ACTION_STRING.rejected),
  payload: { error },
});

const getUserFulfilled = data => ({
  type: ACTION_STRING.getUser.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const editProfilePending = () => ({
  type: ACTION_STRING.editProfile.concat(ACTION_STRING.pending),
});

const editProfileRejected = error => ({
  type: ACTION_STRING.editProfile.concat(ACTION_STRING.rejected),
  payload: {error},
});

const editProfileFulfilled = data => ({
  type: ACTION_STRING.editProfile.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const getUserThunk = (token, cbSuccess, navigate, cbDenied) => {
    return async dispatch => {
      try {
        dispatch(getUserPending());
        // console.log('redux', body);
        const result = await getUser(token);
        dispatch(getUserFulfilled(result.data));
        typeof cbSuccess === "function" && cbSuccess();
      } catch (error) {
        dispatch(getUserRejected(error));
        // console.log(error);
        typeof navigate === "function" && navigate();
        typeof cbDenied === "function" && cbDenied(error.response.data.msg);
      }
    };
};

const editProfileThunk = (body, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(editProfilePending());
      const result = await editUser(body, token);
      dispatch(editProfileFulfilled(result.data));
      typeof cbSuccess === 'function' && cbSuccess();
    } catch (error) {
      dispatch(editProfileRejected(error));
      typeof cbDenied === 'function' && cbDenied(error.response.data.msg);
    }
  };
};

const reset = () => {
  return {
    type: ACTION_STRING.userReset,
  };
};
  
const userAction = {
  getUserThunk,
  editProfileThunk,
  reset
  };
  
  export default userAction;