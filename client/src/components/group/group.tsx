import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { TopNav } from "../../shared";
import { Button, TextField, Typography } from "@mui/material";
import { toast } from 'react-toastify';
import useAuthContext from "../../context/auth/context";
import groupService from "./services/group-service";
import { GroupInterface } from "../../interfaces";
import { GetGroupInfoResponse } from "../../libs/api/responses/group/get-group-info-response";
import ParticipantCard from "./participant-card";

export default function Group() {
  const { groupId } = useParams();
  const { auth } = useAuthContext();

  const [groupInfo, setGroupInfo] = useState<GetGroupInfoResponse>();
  const [currentGroup, setCurrentGroup] = useState<GroupInterface>();

  const fetchGroup = async () => {
    const groupData = await groupService.info({ groupId: groupId });
    setGroupInfo(groupData);
  };

  const fetchGroups = async () => {
    const groupsData = await groupService.get({ userId: auth.userId });

    const current = groupsData.find((group) => group.groupId === groupId);
    const currentInterface: GroupInterface = {
      groupId: current?.groupId,
      name: current?.name || "",
      description: current?.description || "",
      tag: current?.tag || "",
    }

    setCurrentGroup(currentInterface);
  };

  useEffect(() => {
    fetchGroups();
    fetchGroup();
  }, []);

  return (
    <div>
      <div className="w-11/12 mx-auto mt-5">
        <Link to={"/home"}>
          <TopNav />
        </Link>
        <div className="mt-6">
          <Typography variant="h5" component="div">
            {currentGroup?.name}
          </Typography>
          <div className="mt-3" />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {currentGroup?.description}
          </Typography>
          <div className="flex justify-between mt-10">
            <Typography variant="h5" component="div">
              Participantes
            </Typography>
            <div>
              <Link to={`/group/join/${currentGroup?.tag}`}>
                <Button variant="outlined">+</Button>
              </Link>
            </div>
          </div>
          {groupInfo && groupInfo.map((info) => (
            <Link to={`/profile/${info.user.userId}/${info.user.name}`}>
              <ParticipantCard key={info.info.participationId} group={info} />
            </Link>
          ))}
        </div>
      </div>

    </div >
  );
}
