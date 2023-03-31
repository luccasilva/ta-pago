import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RegisterAttributes } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { Logo, TopNav } from "../../shared";
import { Button, TextField, Typography } from "@mui/material";

export default function Register() {
  useNavigate();
  const { register, handleSubmit } = useForm<RegisterAttributes>();

  const handleRegister = async (newUser: RegisterAttributes) => {
    console.log(newUser)
  };

  return (
    <div>
      <Link to="/">
        <TopNav />
      </Link>
      <div className="flex flex-col w-full content-center">
        <Logo />
        <form className="flex flex-col w-9/12 m-auto" onSubmit={handleSubmit(handleRegister)}>
          <TextField {...register("name", { required: true })} id="name" label="Nome" variant="standard" />
          <div className="mt-10" />
          <TextField {...register("email", { required: true })} id="email" label="Email" variant="standard" />
          <div className="mt-10" />
          <TextField {...register("password", { required: true })} id="password" label="Senha" variant="standard" />
          <div className="mt-10" />
          <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}
