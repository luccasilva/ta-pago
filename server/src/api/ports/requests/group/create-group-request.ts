import { GroupInterface } from "../../../../interfaces";

type CreateGroupRequest = Omit<GroupInterface, 'groupId' | 'tag' | 'createdAt' | 'updatedAt'>;

export default CreateGroupRequest;