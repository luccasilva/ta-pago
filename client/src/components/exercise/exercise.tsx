import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TopNav } from "../../shared";
import { Button, TextField, Typography } from "@mui/material";
import { toast } from 'react-toastify';
import CreateExerciseRequest from "../../libs/api/requests/exercise/create-exercise-request";
import exerciseService from "./services/exercise-service";

export default function Exercise() {
  const { register, handleSubmit } = useForm<CreateExerciseRequest>();

  const handleRegister = async (newExercise: CreateExerciseRequest) => {
    try {
      await exerciseService.register(newExercise);
      toast.success("Exercicio cadastrado com sucesso!");
    } catch (error: any) {
      toast.error(error.response?.data || "Error occurred during registration.");
    }
  };

  return (
    <div>
      <Link to="/home">
        <TopNav />
      </Link>
      <div className="w-11/12 mx-auto mt-5">
        <Typography variant="h5" component="div">
          Meus Exercícios
        </Typography>
        <div className="mt-3" />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Crie aqui os exercícios que pratica atualmente,
          depois combine e monte sua ficha para compartilhar
          com seus grupos!
        </Typography>
        <div className="mb-10" />

        <div className="flex flex-col w-full content-center">
          <form className="flex flex-col w-9/12 m-auto" onSubmit={handleSubmit(handleRegister)}>
            <TextField {...register("name", { required: true })} id="name" label="Nome" variant="standard" />
            <div className="mt-5" />
            <TextField {...register("weight", { required: true })} id="weight" label="Peso" variant="standard" />
            <div className="mt-5" />
            <TextField {...register("repetitions", { required: true })} id="repetitions" label="Repetições" variant="standard" />
            <div className="mt-5" />
            <TextField {...register("breakTime", { required: true })} id="breakTime" label="Pausa" variant="standard" />
            <div className="mt-5" />
            <Button type="submit" variant="contained">Cadastrar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
