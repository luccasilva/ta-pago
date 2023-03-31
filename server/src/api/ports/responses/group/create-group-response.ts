import { GroupInterface } from "../../../../interfaces";

type CreateGroupResponse = Omit<GroupInterface, 'createdAt' | 'updatedAt'>;

export default CreateGroupResponse;