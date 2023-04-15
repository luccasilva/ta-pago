import { TextField, Typography } from "@mui/material";
import React from "react";
import { Logo, TopNav } from "../../shared";
import { Link, useParams } from "react-router-dom";

export default function JoinGroup() {
  const { tag } = useParams();

  return (
    <div className="w-11/12 mx-auto mt-5">
      <Link to={"/home"}>
        <TopNav />
      </Link>
      <div className="mt-6">
        <Typography variant="h5" component="div">
          Convidar para o grupo!
        </Typography>
        <div className="mt-4" />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Compartilhe esse código com seus amigos para convidar-los para o grupo!
        </Typography>
        <div className="mt-10" />
        <TextField value={tag} id="tag" fullWidth label="Código de acesso" />
        <div>
          <div className="mt-10" />
          <Logo width={"200px"} />
        </div>
      </div>
    </div>
  );
}
