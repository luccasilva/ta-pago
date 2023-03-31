import { GroupInterface } from "../../../../interfaces";

type JoinGroupResponse = Omit<GroupInterface, 'createdAt' | 'updatedAt'>;

export default JoinGroupResponse;