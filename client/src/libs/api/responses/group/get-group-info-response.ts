import { ParticipationInterface, UserInterface } from "../../../../interfaces";

type GetGroupInfoResponse = {
  user: Omit<UserInterface, 'password' | 'name' | 'email' | 'createdAt' | 'updatedAt'>,
  info: Omit<ParticipationInterface, 'createdAt' | 'updatedAt'>,
};

export default GetGroupInfoResponse;