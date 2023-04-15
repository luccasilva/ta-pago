import axiosInstance from './config/axios';
import CreateExerciseRequest from './requests/exercise/create-exercise-request';
import DeleteExerciseRequest from './requests/exercise/delete-exercise-request';
import GetExerciseRequest from './requests/exercise/get-exercise-request';
import CreateExerciseResponse from './responses/exercise/create-exercise-response';
import DeleteExerciseResponse from './responses/exercise/delete-exercise-response';
import GetExerciseResponse from './responses/exercise/get-exercise-response';

const register = async (request: CreateExerciseRequest) => {
  return axiosInstance.post<CreateExerciseResponse>(`/exercise`, request);
}

const get = async (request: GetExerciseRequest) => {
  return axiosInstance.post<GetExerciseResponse>(`/exercise/get`, request);
}

const delete_ = async (request: DeleteExerciseRequest) => {
  return axiosInstance.post<DeleteExerciseResponse>(`/exercise/delete`, request);
}

export default {
  register,
  get,
  delete_,
};
