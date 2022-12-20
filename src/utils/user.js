/* eslint-disable prettier/prettier */
import axios from 'axios';

const BaseUrl = 'https://coffebug.vercel.app/';

const config = (token) => {
    return {
      headers: {
        'x-access-token': `${token}`,
      },
    };
  };

export const getUser = (token) => {
  const URL = `${BaseUrl}api/users`;
  console.log('util', URL);
  return axios.get(URL, config(token));
};

export const editUser = (body, token) =>
  axios.patch(`${BaseUrl}api/users/edit-profile`, body, config(token));
