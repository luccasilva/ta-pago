import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}`,
});

type StatusCodeList = (number | undefined)[];

export const logoutStatusCodes: StatusCodeList = [401, 403];
export const expectedErrorsStatusCodes: StatusCodeList = [400, 404];

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('x-access-token')?.slice(1, -1);
    if (config.headers && token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  },
);

export default axiosInstance;
