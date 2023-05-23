import { AxiosResponse } from "axios";
import api from "../../../libs/api";
import CreateUserRequest from "../../../libs/api/requests/user/create-user-request";
import CreateUserResponse from "../../../libs/api/responses/user/create-user-response";

const register = async (registerAttributes: CreateUserRequest): Promise<CreateUserResponse> => {
  let registerResponse: AxiosResponse<CreateUserResponse>;

  // eslint-disable-next-line no-useless-catch
  try {
    registerResponse = await api.user.register(registerAttributes);
  } catch (error: unknown) {
    throw (error);
  }

  return registerResponse.data;
};

const registerService = {
  register,
};

export default registerService;
