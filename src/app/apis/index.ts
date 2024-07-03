import axios from 'axios';



export function getToken() {
  return localStorage.getItem("token");
}
const exceptPrefix = ['/login', '/register'];
const checkEndPoint = (endpoint:string) => {
  for (const prefix of exceptPrefix) {
    if (endpoint.includes(prefix)) {
      return true;
    }
  }
  return false;
};
export const callApi = (endPoint: string, method: string, body?: any) => {
  try {
    
    if(checkEndPoint(endPoint) ===false){
      return axios({
        method,
        url: `https://gateway.lencam.com${endPoint}`,
        data: body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`,
        },
      });

    }
    return axios({
      method,
      url: `https://gateway.lencam.com${endPoint}`,
      data: body,
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${getToken()}`,
      },
    }) 
    }
  catch (error: any) {
    if (error.response) {
      console.error('Server Error:', error.response.status);
    } else if (error.request) {
      console.error('No response received from server');
    } else {
      console.error('Error setting up request:', error.message);
    }
  }
};
