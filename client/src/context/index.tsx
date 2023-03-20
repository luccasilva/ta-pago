import React from "react";
import { ContextProviderProps } from "../interfaces";
import AuthContextProvider from "./auth/provider";

function AplicationContextProvider({ children }: ContextProviderProps) {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  );
}

export default AplicationContextProvider;
