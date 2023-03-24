import React, { useMemo, useState } from "react";
import ContextProviderProps from "../../interfaces/context/ContextProviderProps";
import { AuthInfo } from "../../interfaces";
import { AuthContext, AUTH_CONTEXT_DEFAULT_VALUE } from "./context";

function AuthContextProvider({ children }: ContextProviderProps) {
  const [auth, setAuth] = useState<AuthInfo>(AUTH_CONTEXT_DEFAULT_VALUE.auth);

  const value = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth, setAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
