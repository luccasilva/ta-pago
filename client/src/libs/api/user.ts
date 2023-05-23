import axiosInstance from './config/axios';
import CreateUserRequest from './requests/user/create-user-request';
import CreateUserResponse from './responses/user/create-user-response';

const register = async (request: CreateUserRequest) => axiosInstance.post<CreateUserResponse>(`/user`, request);

export default {
  register,
};
