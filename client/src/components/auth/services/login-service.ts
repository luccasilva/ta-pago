import { AxiosResponse } from "axios";
import { LoginAttributes } from "../../../interfaces";
import api from "../../../libs/api";
import LoginResponse from "../../../libs/api/responses/auth/login-response";

const login = async (loginAttributes: LoginAttributes): Promise<LoginResponse> => {
  let loginResponse: AxiosResponse<LoginResponse>;

  // eslint-disable-next-line no-useless-catch
  try {
    loginResponse = await api.auth.login(loginAttributes);
  } catch (error: unknown) {
    throw (error);
  }

  const { accessToken } = loginResponse.data;
  localStorage.setItem('x-access-token', JSON.stringify(accessToken));

  return loginResponse.data;
};

const loginService = {
  login,
};

export default loginService;
