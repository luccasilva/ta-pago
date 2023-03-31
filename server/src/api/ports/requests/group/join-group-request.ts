import { GroupInterface } from "../../../../interfaces";

type JoinGroupRequest = Omit<GroupInterface, 'groupId' | 'name' | 'description' | 'createdAt' | 'updatedAt'>;

export default JoinGroupRequest;