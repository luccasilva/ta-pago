import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}`,
});

type StatusCodeList = (number | undefined)[];

export const logoutStatusCodes: StatusCodeList = [401, 403];
export const expectedErrorsStatusCodes: StatusCodeList = [400, 404];

export default axiosInstance;
