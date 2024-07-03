import { callApi } from '@/app/apis/index';

const login = (body:any) => {
  return callApi(`/auth/api/token`, 'post', body);
};


export const users = {
  login,
};
