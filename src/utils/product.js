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

export const getProduct = () => {
  const URL = `${BaseUrl}api/products?limit=5`;
  // console.log('util', URL);
  return axios.get(URL);
};

export const getAllProduct = (query) => {
  const URL = `${BaseUrl}api/products?limit=6`;
  // console.log('util', URL);
  return axios.get(URL, {params: query});
};

export const getProductDetail = (id, token) => {
  const URL = `${BaseUrl}api/products/${id}`;
  return axios.get(URL, id, config(token));
};

export const getPromo = (query) => {
  const URL = `${BaseUrl}api/promos?limit=6`;
  // console.log('util', URL);
  return axios.get(URL, {params: query});
};

export const createProduct = (body, token) => {
  const URL = `${BaseUrl}api/products`;
  return axios.post(URL, body, config(token));
};

export const createPromo = (body, token) => {
  const URL = `${BaseUrl}api/promos`;
  return axios.post(URL, body, config(token));
};
