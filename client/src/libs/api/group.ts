import axiosInstance from './config/axios';
import CreateGroupRequest from './requests/group/create-group-request';
import GetGroupInfoRequest from './requests/group/get-group-info-request';
import GetUserGroupsRequest from './requests/group/get-user-groups-request';
import JoinGroupRequest from './requests/group/join-group-request';
import CreateGroupResponse from './responses/group/create-group-response';
import { GetGroupInfoResponse } from './responses/group/get-group-info-response';
import GetUserGroupsResponse from './responses/group/get-user-groups-response';
import JoinGroupResponse from './responses/group/join-group-response';

const register = async (request: CreateGroupRequest) => {
  return axiosInstance.post<CreateGroupResponse>(`/group`, request);
}

const join = async (request: JoinGroupRequest) => {
  return axiosInstance.post<JoinGroupResponse>(`/group/join`, request);
}

const get = async (request: GetUserGroupsRequest) => {
  return axiosInstance.post<GetUserGroupsResponse>(`/group/get`, request);
}

const info = async (request: GetGroupInfoRequest) => {
  return axiosInstance.post<GetGroupInfoResponse>(`/group/info`, request);
}

export default {
  register,
  join,
  get,
  info,
};
