import { UserInterface } from "../../../../interfaces";

type CreateUserRequest = Omit<UserInterface, 'userId' | 'createdAt' | 'updatedAt'>;

export default CreateUserRequest;