import axiosInstance from './config/axios';
import CreateRecordRequest from './requests/record/create-record-request';
import DeleteRecordRequest from './requests/record/delete-record-request';
import GetRecordRequest from './requests/record/get-record-request';
import PutRecordRequest from './requests/record/put-record-request';
import CreateRecordResponse from './responses/record/create-record-response';
import DeleteRecordResponse from './responses/record/delete-record-response';
import GetRecordResponse from './responses/record/get-record-response';
import PutRecordResponse from './responses/record/put-record-response';

const register = async (request: CreateRecordRequest) => {
  return axiosInstance.post<CreateRecordResponse>(`/record`, request);
}

const get = async (request: GetRecordRequest) => {
  return axiosInstance.post<GetRecordResponse>(`/record/get`, request);
}

const delete_ = async (request: DeleteRecordRequest) => {
  return axiosInstance.post<DeleteRecordResponse>(`/record/delete`, request);
}

const put = async (request: PutRecordRequest) => {
  return axiosInstance.put<PutRecordResponse>(`/record`, request);
}

export default {
  register,
  get,
  delete_,
  put,
};
