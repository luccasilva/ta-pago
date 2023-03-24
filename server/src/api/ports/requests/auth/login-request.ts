import { UserInterface } from "../../../../interfaces";

type LoginRequest = Omit<UserInterface, 'userId' | 'name' | 'createdAt' | 'updatedAt'>;

export default LoginRequest;