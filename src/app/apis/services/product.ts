import { callApi } from '@/app/apis/index';

const getCategory = (shopId:string) => {
  return callApi(`/product-2/api/${shopId}/category?page=1&limit=100&parent_id=all&key`, 'get');
};


export const categories = {
  getCategory,
};
