import axiosInstance from './config/axios';
import LoginRequest from './requests/auth/login-request';
import LoginResponse from './responses/auth/login-response';

const login = async (request: LoginRequest) => axiosInstance.post<LoginResponse>(`/login`, request);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
};
