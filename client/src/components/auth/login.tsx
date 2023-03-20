import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginAttributes } from "../../interfaces";
import useAuthContext from "../../context/auth/context";

export default function Login() {
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginAttributes>();

  const handleLogin = async (loginUser: LoginAttributes) => {

  };

  return (
    <div>
      <Link to="/register">Cadastro</Link>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input {...register("email", { required: true })} />
        <input {...register("password", { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}
