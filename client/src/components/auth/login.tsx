import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginAttributes } from "../../interfaces";
import useAuthContext from "../../context/auth/context";
import loginService from "./services/login-service";
import { Button, TextField, Typography } from "@mui/material";
import { Logo } from "../../shared";
import { toast } from 'react-toastify';

export default function Login() {
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginAttributes>();

  const handleLogin = async (loginUser: LoginAttributes) => {
    try {
      const userInfo = await loginService.login(loginUser);
      setAuth(userInfo);
      navigate("/home");
      toast.success("Logado com sucesso!");
    } catch (error: any) {
      toast.error(error.response?.data || "Error occurred during login.");
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full content-center">
        <Logo width="150px" />
        <form className="flex flex-col w-9/12 m-auto" onSubmit={handleSubmit(handleLogin)}>
          <TextField {...register("email", { required: true })} id="email" label="Email" variant="standard" />
          <div className="mt-10" />
          <TextField {...register("password", { required: true })} id="password" label="Senha" variant="standard" />
          <div className="mt-10" />
          <Button type="submit" variant="contained">Logar</Button>
        </form>
        <div className="flex flex-col w-9/12 m-auto mt-20">
          <Typography variant="h6">Não possui uma conta?</Typography>
          <Link to="/register">
            <Button fullWidth variant="outlined">Cadastre-se</Button>
          </Link>
        </div>
      </div>

    </div>
  );
}
