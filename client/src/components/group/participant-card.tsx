import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { GetGroupInfo } from "../../libs/api/responses/group/get-group-info-response";

interface Props {
  group: GetGroupInfo;
}

export default function ParticipantCard(
  {
    group,
  }: Props,
) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '##ED6C02' : '#308fe8',
    },
  }));

  return (
    <div className="mt-5 mb-5">
      <Card>
        <CardContent>
          <div className="flex justify-between">
            <div className="mr-4">
              <div className="flex justify-end">
                <Typography variant="h5">
                  {group.user.name}
                </Typography>
              </div>
              <div className="mt-1" />
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {group.info.currentWeekScore + " pontos"}
              </Typography>
            </div>
          </div>
          <div className="w-full mt-5">
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Meta semanal
            </Typography>
            <BorderLinearProgress variant="determinate" value={Math.floor(Math.random() * (80 - 30 + 1)) + 30} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
