import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RegisterAttributes } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { Logo, TopNav } from "../../shared";
import { Button, TextField } from "@mui/material";
import registerService from "./services/register-service";
import { toast } from 'react-toastify';

export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RegisterAttributes>();

  const handleRegister = async (newUser: RegisterAttributes) => {
    try {
      await registerService.register(newUser);
      navigate("/");
      toast.success("Cadastro realizado com sucesso!");
    } catch (error: any) {
      toast.error(error.response?.data || "Error occurred during registration.");
    }
  };

  return (
    <div>
      <Link to="/">
        <TopNav />
      </Link>
      <div className="flex flex-col w-full content-center">
        <Logo width="150px" />
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
