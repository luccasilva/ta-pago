import { UserInterface } from "../../../../interfaces";

type GetUserGroupsRequest = Omit<UserInterface, 'email' | 'name' | 'password' | 'createdAt' | 'updatedAt'>;

export default GetUserGroupsRequest;