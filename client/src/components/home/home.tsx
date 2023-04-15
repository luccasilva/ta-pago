import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import useAuthContext from "../../context/auth/context";
import { Logo } from "../../shared";
import { Link } from "react-router-dom";

export default function Home() {
  const { auth } = useAuthContext();

  return (
    <div className="w-11/12 mx-auto mt-5">
      <Typography variant="h3">Olá {auth.name}!</Typography>
      <div className="mt-5" />
      <Link to="/exercise">
        <Card>
          <CardContent>
            <div className="flex">
              <div className="mr-4">
                <Typography variant="h5" component="div">
                  Meus Exercícios
                </Typography>
                <div className="mt-5" />
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Aqui você registra todos os exercícios
                  que pratica atualmente!
                </Typography>
              </div>
              <Logo width="70px" />
            </div>
          </CardContent>
        </Card>
      </Link>

      <div className="mt-10" />
      <Link to="/record">
        <Card>
          <CardContent>
            <div className="flex">
              <div className="mr-4">
                <Typography variant="h5" component="div">
                  Minhas Fichas
                </Typography>
                <div className="mt-5" />
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Crie e edite suas fichas de exercícios
                  para compartilhar com amigos!
                </Typography>
              </div>
              <Logo width="70px" />
            </div>
          </CardContent>
        </Card>
      </Link>

    </div>
  );
}
