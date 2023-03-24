import { UserInterface } from "../../../../interfaces";

type LoginResponse = Omit<UserInterface, 'password' | 'createdAt' | 'updatedAt'> & { accessToken: string };

export default LoginResponse;

