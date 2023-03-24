import { UserInterface } from "../../../../interfaces";

type CreateUserResponse = Omit<UserInterface, 'createdAt' | 'updatedAt'>;

export default CreateUserResponse;