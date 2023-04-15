import { AxiosResponse } from "axios";
import api from "../../../libs/api";
import CreateExerciseRequest from "../../../libs/api/requests/exercise/create-exercise-request";
import CreateExerciseResponse from "../../../libs/api/responses/exercise/create-exercise-response";
import GetExerciseRequest from "../../../libs/api/requests/exercise/get-exercise-request";
import GetExerciseResponse from "../../../libs/api/responses/exercise/get-exercise-response";
import DeleteExerciseRequest from "../../../libs/api/requests/exercise/delete-exercise-request";
import DeleteExerciseResponse from "../../../libs/api/responses/exercise/delete-exercise-response";

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

const get = async (getAttributes: GetExerciseRequest): Promise<GetExerciseResponse> => {
  let getResponse: AxiosResponse<GetExerciseResponse>;

  // eslint-disable-next-line no-useless-catch
  try {
    getResponse = await api.exercise.get(getAttributes);
  } catch (error: unknown) {
    throw (error);
  }

  return getResponse.data;
};

const delete_ = async (deleteAttributes: DeleteExerciseRequest): Promise<DeleteExerciseResponse> => {
  let deleteResponse: AxiosResponse<DeleteExerciseResponse>;

  // eslint-disable-next-line no-useless-catch
  try {
    deleteResponse = await api.exercise.delete_(deleteAttributes);
  } catch (error: unknown) {
    throw (error);
  }

  return deleteResponse.data;
};

const exerciseService = {
  register,
  get,
  delete_,
};

export default exerciseService;
