import { GroupInterface } from "../../../../interfaces";

type GetGroupInfoRequest = Omit<GroupInterface, 'description' | 'name' | 'tag' | 'createdAt' | 'updatedAt'>;

export default GetGroupInfoRequest;