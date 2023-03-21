import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}`,
});

type StatusCodeList = (number | undefined)[];

export const logoutStatusCodes: StatusCodeList = [401, 403];
export const expectedErrorsStatusCodes: StatusCodeList = [400, 404];

/*
axiosInstance.interceptors.request.use(
  (config) => {
    const userSession = getUserSessionFromLocalStorage();

    if (config.headers && userSession) {
      config.headers['x-access-token'] = `${userSession.accessToken}`;
    }

    return config;
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorResponse>) => {
    const statusCode = error.response?.status;

    if (logoutStatusCodes.includes(statusCode)) {
      toast.error(toastMessages.error.UNAUTHORIZED_USER);
      handleLogout();
      return;
    }

    if (!expectedErrorsStatusCodes.includes(statusCode)) {
      toast.error(toastMessages.error.UNEXPECTED_ERROR);
    }

    // eslint-disable-next-line consistent-return
    return Promise.reject(error);
  },
);
*/

export default axiosInstance;
