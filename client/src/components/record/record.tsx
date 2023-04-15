import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TopNav } from "../../shared";
import { Button, TextField, Typography } from "@mui/material";
import { toast } from 'react-toastify';
import CreateRecordRequest from "../../libs/api/requests/record/create-record-request";
import RecordService from "./services/record-service";
import { RecordInterface } from "../../interfaces";
import useAuthContext from "../../context/auth/context";
import RecordMenu from "./record-menu";

export default function Record() {
  const { register, handleSubmit } = useForm<CreateRecordRequest>();
  const [records, setRecords] = useState<RecordInterface[]>([]);
  const { auth } = useAuthContext();

  const fetchRecords = async () => {
    const recordsData = await RecordService.get({ userId: auth.userId });
    setRecords(recordsData);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleDeleteRecord = async (recordId: string) => {
    const deletdRecord = await RecordService.delete_({ recordId: recordId });
    setRecords(filterRecords => filterRecords.filter(record => record.recordId !== deletdRecord.recordId));
    toast.success("Ficha removida com sucesso!");
  };

  const handleRegisterRecord = async (newRecord: CreateRecordRequest) => {
    try {
      const newRecordData = await RecordService.register(newRecord);

      const newRecordInferace: RecordInterface = {
        recordId: newRecordData.recordId,
        userId: newRecordData.userId,
        name: newRecordData.name,
        description: newRecordData.description,
        exercises: newRecordData.exercises,
      }

      toast.success("Ficha cadastrada com sucesso!");

      setRecords([...records, newRecordInferace]);
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
          Fichas
        </Typography>
        <div className="mt-3" />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Crie aqui sua ficha completa, combinando os exercícios para compartilhar o
          treino com seus grupos!
        </Typography>
        <div className="mb-10" />

        <div className="flex flex-col w-full content-center mb-10">
          <form className="flex flex-col w-9/12 m-auto" onSubmit={handleSubmit(handleRegisterRecord)}>
            <TextField {...register("name", { required: true })} id="name" label="Nome" variant="standard" />
            <div className="mt-5" />
            <TextField {...register("description", { required: true })} id="description" label="Descrição" variant="standard" />
            <div className="mt-5" />
            <Button type="submit" variant="contained">Cadastrar</Button>
          </form>
        </div>

        <div>
          {records.map((record) => (
            <RecordMenu key={record.recordId} onDeleteRecord={handleDeleteRecord} record={record} />
          ))}
        </div>

      </div>
    </div>
  );
}
