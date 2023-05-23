import axiosInstance from './config/axios';
import CreateExerciseRequest from './requests/exercise/create-exercise-request';
import CreateExerciseResponse from './responses/exercise/create-exercise-response';

const token = localStorage.getItem('x-access-token')?.slice(1, -1);
const headers = { 'x-access-token': token };

const register = async (request: CreateExerciseRequest) => {
  return axiosInstance.post<CreateExerciseResponse>(`/exercise`, request, { headers });
}

export default {
  register,
};
