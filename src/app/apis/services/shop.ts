import { callApi } from '@/app/apis/index';

export const getShop = () => {
  return callApi(`/shop/api?page=1&limit=100&published=true`, 'get');
};

export const shops = {
  getShop,
};
