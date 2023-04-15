import { ParticipationInterface, UserInterface } from "../../../../interfaces";

type GetGroupInfo = {
  user: Omit<UserInterface, 'password' | 'email' | 'createdAt' | 'updatedAt'>,
  info: Omit<ParticipationInterface, 'createdAt' | 'updatedAt'>,
};

type GetGroupInfoResponse = GetGroupInfo[];

export type { GetGroupInfo, GetGroupInfoResponse };