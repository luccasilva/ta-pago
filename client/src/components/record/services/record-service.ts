import { AxiosResponse } from "axios";
import api from "../../../libs/api";
import CreateRecordRequest from "../../../libs/api/requests/record/create-record-request";
import CreateRecordResponse from "../../../libs/api/responses/record/create-record-response";
import GetRecordRequest from "../../../libs/api/requests/record/get-record-request";
import GetRecordResponse from "../../../libs/api/responses/record/get-record-response";
import DeleteRecordRequest from "../../../libs/api/requests/record/delete-record-request";
import DeleteRecordResponse from "../../../libs/api/responses/record/delete-record-response";

const register = async (registerAttributes: CreateRecordRequest): Promise<CreateRecordResponse> => {
  let registerResponse: AxiosResponse<CreateRecordResponse>;

  // eslint-disable-next-line no-useless-catch
  try {
    registerResponse = await api.record.register(registerAttributes);
  } catch (error: unknown) {
    throw (error);
  }

  return registerResponse.data;
};

const get = async (getAttributes: GetRecordRequest): Promise<GetRecordResponse> => {
  let getResponse: AxiosResponse<GetRecordResponse>;

  // eslint-disable-next-line no-useless-catch
  try {
    getResponse = await api.record.get(getAttributes);
  } catch (error: unknown) {
    throw (error);
  }

  return getResponse.data;
};

const delete_ = async (deleteAttributes: DeleteRecordRequest): Promise<DeleteRecordResponse> => {
  let deleteResponse: AxiosResponse<DeleteRecordResponse>;

  // eslint-disable-next-line no-useless-catch
  try {
    deleteResponse = await api.record.delete_(deleteAttributes);
  } catch (error: unknown) {
    throw (error);
  }

  return deleteResponse.data;
};

const recordService = {
  register,
  get,
  delete_,
};

export default recordService;
