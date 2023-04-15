import { AxiosResponse } from "axios";
import api from "../../../libs/api";
import CreateGroupRequest from "../../../libs/api/requests/group/create-group-request";
import CreateGroupResponse from "../../../libs/api/responses/group/create-group-response";
import JoinGroupRequest from "../../../libs/api/requests/group/join-group-request";
import JoinGroupResponse from "../../../libs/api/responses/group/join-group-response";
import GetUserGroupsRequest from "../../../libs/api/requests/group/get-user-groups-request";
import GetUserGroupsResponse from "../../../libs/api/responses/group/get-user-groups-response";
import GetGroupInfoRequest from "../../../libs/api/requests/group/get-group-info-request";
import GetGroupInfoResponse from "../../../libs/api/responses/group/get-group-info-response";

const register = async (registerAttributes: CreateGroupRequest): Promise<CreateGroupResponse> => {
  let registerResponse: AxiosResponse<CreateGroupResponse>;

  // eslint-disable-next-line no-useless-catch
  try {
    registerResponse = await api.group.register(registerAttributes);
  } catch (error: unknown) {
    throw (error);
  }

  return registerResponse.data;
};

const join = async (joinAttributes: JoinGroupRequest): Promise<JoinGroupResponse> => {
  let joinResponse: AxiosResponse<JoinGroupResponse>;

  // eslint-disable-next-line no-useless-catch
  try {
    joinResponse = await api.group.join(joinAttributes);
  } catch (error: unknown) {
    throw (error);
  }

  return joinResponse.data;
};

const get = async (getAttributes: GetUserGroupsRequest): Promise<GetUserGroupsResponse> => {
  let getResponse: AxiosResponse<GetUserGroupsResponse>;

  // eslint-disable-next-line no-useless-catch
  try {
    getResponse = await api.group.get(getAttributes);
  } catch (error: unknown) {
    throw (error);
  }

  return getResponse.data;
};

const info = async (infoAttributes: GetGroupInfoRequest): Promise<GetGroupInfoResponse> => {
  let infoResponse: AxiosResponse<GetGroupInfoResponse>;

  // eslint-disable-next-line no-useless-catch
  try {
    infoResponse = await api.group.info(infoAttributes);
  } catch (error: unknown) {
    throw (error);
  }

  return infoResponse.data;
};

const groupService = {
  register,
  join,
  get,
  info,
};

export default groupService;
