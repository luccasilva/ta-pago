import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { TopNav } from "../../shared";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import JoinGroupRequest from "../../libs/api/requests/group/join-group-request";
import CreateGroupRequest from "../../libs/api/requests/group/create-group-request";
import { toast } from "react-toastify";
import groupService from "./services/group-service";

export default function CreateGroup() {
  const { register: registerJoin, handleSubmit: handleSubmitJoin } = useForm<JoinGroupRequest>();
  const { register: registerCreate, handleSubmit: handleSubmitCreate } = useForm<CreateGroupRequest>();

  const [showGroupCode, setShowGroupCode] = useState<boolean>(false);
  const [groupCode, setGroupCode] = useState<string>("");

  const handleJoinGroup = async (group: JoinGroupRequest) => {
    try {
      await groupService.join(group);
      toast.success("Você entrou no grupo!");
    } catch (error: any) {
      toast.error(error.response?.data || "Error occurred during registration.");
    }
  };

  const handleCreateGroup = async (group: CreateGroupRequest) => {
    try {
      const newGroup = await groupService.register(group);
      setGroupCode(newGroup.tag);
      setShowGroupCode(true);
      toast.success("Grupo criado com sucesso!");
    } catch (error: any) {
      toast.error(error.response?.data || "Error occurred during registration.");
    }
  };

  return (
    <div className="w-11/12 mx-auto mt-5">
      <Link to={"/home"}>
        <TopNav />
      </Link>
      <div className="mt-6">
        <Typography variant="h5" component="div">
          Entrar em um grupo
        </Typography>
        <div className="mt-3" />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Caso seus amigos já tenham cadastrado o grupo, basta digitar
          o código para juntar-se a eles!
        </Typography>
        <div>
          <form className="flex flex-col w-9/12 m-auto" onSubmit={handleSubmitJoin(handleJoinGroup)}>
            <div className="mt-5" />
            <TextField {...registerJoin("tag", { required: true })} id="tag" label="Código do grupo" variant="standard" />
            <div className="mt-5" />
            <Button type="submit" variant="contained">Entrar</Button>
          </form>
        </div>
      </div>

      <div className="mt-10 mb-5">
        <Typography variant="h5" component="div">
          Gostaria de criar um novo grupo?
        </Typography>
        <div className="mt-3" />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Crie e comparttilhe um grupo com seus amigos para motivar a
          prática de exercícios físicos entre vocês!
        </Typography>
        <div>
          <form className="flex flex-col w-9/12 m-auto" onSubmit={handleSubmitCreate(handleCreateGroup)}>
            <div className="mt-5" />
            <TextField {...registerCreate("name", { required: true })} id="name" label="Nome" variant="standard" />
            <div className="mt-5" />
            <TextField {...registerCreate("description", { required: true })} id="description" label="Descrição" variant="standard" />
            <div className="mt-5" />
            <Button type="submit" variant="contained">Criar</Button>
          </form>
        </div>
        <div>
          {showGroupCode && (
            <div className="mt-10 w-11/12">
              <Typography variant="h5" component="div">
                Grupo Criado!
              </Typography>
              <div className="mt-3" />
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Compartilhe o código abaixo com seus amigos para que eles possam entrar no grupo!
              </Typography>
              <div className="mt-6" />
              <TextField value={groupCode} id="tag" fullWidth label="Código de acesso" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
