import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RegisterAttributes } from "../../interfaces";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RegisterAttributes>();

  const handleRegister = async (newUser: RegisterAttributes) => {

  };

  return (
    <div>
      <Link to="/">Login</Link>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(handleRegister)}>
        <p>Nome</p>
        <input {...register("name", { required: true })} />
        <p>Email</p>
        <input {...register("email", { required: true })} />
        <p>Senha</p>
        <input {...register("password", { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}
