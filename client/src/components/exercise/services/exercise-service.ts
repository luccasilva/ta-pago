import { AxiosResponse } from "axios";
import api from "../../../libs/api";
import CreateExerciseRequest from "../../../libs/api/requests/exercise/create-exercise-request";
import CreateExerciseResponse from "../../../libs/api/responses/exercise/create-exercise-response";

const register = async (registerAttributes: CreateExerciseRequest): Promise<CreateExerciseResponse> => {
  let registerResponse: AxiosResponse<CreateExerciseResponse>;

  // eslint-disable-next-line no-useless-catch
  try {
    registerResponse = await api.exercise.register(registerAttributes);
  } catch (error: unknown) {
    throw (error);
  }

  return registerResponse.data;
};

const exerciseService = {
  register,
};

export default exerciseService;
