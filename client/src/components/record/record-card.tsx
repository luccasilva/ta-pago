import React from "react";
import { Typography } from "@mui/material";
import { RecordInterface } from "../../interfaces";
import ExerciseCard from "../exercise/exercise-card";

interface Props {
  record: RecordInterface;
}

export default function RecordCard(
  {
    record,
  }: Props,
) {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const empty = () => { };

  return (
    <div className="mb-5">
      <Typography variant="h5">
        {record.name}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {record.description}
      </Typography>
      {record && record.exercises && record.exercises.map((exercise) => (
        <ExerciseCard key={exercise.exerciseId} onDeleteExercise={empty} exercise={exercise} hideButton={true} />
      ))}
    </div>
  );
}
