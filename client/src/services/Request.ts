import axios, { AxiosRequestConfig } from 'axios';
import { LoginData, PointsData, RegisterData, User } from './AuthService';

// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = 'http://localhost:5000';

const request = async (method: string, url: string, data?: PointsData | LoginData | RegisterData | null, user?: User) => {
  const options: AxiosRequestConfig = {
    method,
    url: `${apiUrl}${url}`,
    headers: {},
  };

  if(user) {
    options.headers!['F-Authorization'] = JSON.stringify(user.accessToken);
    options.headers!.user = JSON.stringify(user);
  }

  if (data !== undefined) {
    options.headers!["Content-Type"] = "application/json";
    options.data = data;
  } 

  try {
    const response = await axios(options);

    if (response.status === 204) {
      return response;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

request.get = request.bind(null, 'get');
request.post = request.bind(null, 'post');
request.put = request.bind(null, 'put');
request.delete = request.bind(null, 'delete');

export default request;
