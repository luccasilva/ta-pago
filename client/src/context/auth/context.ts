import { createContext, useContext } from "react";
import { AuthInfo } from "../../interfaces";

interface AuthContextInformation {
  auth: AuthInfo;
  setAuth: React.Dispatch<React.SetStateAction<AuthInfo>>;
}

export const AUTH_CONTEXT_DEFAULT_VALUE = {
  auth: {
    name: "",
    email: "",
    accessToken: "",
    userId: "",
  } as AuthInfo,
  setAuth: () => null,
} as AuthContextInformation;

export const AuthContext = createContext<AuthContextInformation>(
  AUTH_CONTEXT_DEFAULT_VALUE
);

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
