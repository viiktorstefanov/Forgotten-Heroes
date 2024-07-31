import axios, { AxiosRequestConfig } from 'axios';

const apiUrl = process.env.API_URL;

interface User {
  accessToken: string;
}

interface Data {
  
}

const request = async (method: string, url: string, data?: Data, user?: User) => {
  const options: AxiosRequestConfig = {
    method,
    url: `${apiUrl}${url}`,
    headers: {},
  };

  if (user) {
    options.headers!["H-Authorization"] = user.accessToken;
    options.headers!.user = JSON.stringify(user);
  }

  if (data) {
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
