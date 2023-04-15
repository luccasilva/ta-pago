import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { GroupInterface } from "../../interfaces";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

interface Props {
  group: GroupInterface;
}

export default function GroupCard(
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
              <div className="flex justify-start">
                <Typography variant="h5">
                  {group.name}
                </Typography>
              </div>
              <div className="mt-5" />
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {group.description}
              </Typography>
            </div>
          </div>
          <div className="w-full mt-10">
            <BorderLinearProgress variant="determinate" value={Math.floor(Math.random() * (80 - 30 + 1)) + 30} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
