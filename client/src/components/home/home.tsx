import { Button, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuthContext from "../../context/auth/context";
import { Logo } from "../../shared";
import { Link } from "react-router-dom";
import { GroupInterface } from "../../interfaces";
import groupService from "../group/services/group-service";
import Group from "../../libs/api/group";
import GroupCard from "../group/group-card";

export default function Home() {
  const { auth } = useAuthContext();

  const [groups, setGroups] = useState<GroupInterface[]>([]);

  const fetchGroups = async () => {
    const groupsData = await groupService.get({ userId: auth.userId });
    setGroups(groupsData);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

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

      <div className="flex justify-between mt-10">
        <Typography variant="h5" component="div">
          Meus Grupos
        </Typography>
        <div>
          <Link to="/group/create">
            <Button variant="outlined" >+</Button>
          </Link>
        </div>
      </div>
      <div>
        {groups.map((group) => (
          <Link to={`/group/${group.groupId}`} key={group.groupId}>
            <GroupCard group={group} />
          </Link>
        ))}
      </div>

    </div>
  );
}
