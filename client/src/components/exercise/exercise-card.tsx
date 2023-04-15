import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { ExerciseInterface } from "../../interfaces";

interface Props {
  onDeleteExercise: (exerciseId: string) => void;
  exercise: ExerciseInterface;
}

export default function ExerciseCard(
  {
    exercise, onDeleteExercise,
  }: Props,
) {
  const handleDelete = (exerciseId: string) => {
    onDeleteExercise(exerciseId);
  };

  return (
    <div className="mb-5">
      <Card>
        <CardContent>
          <div className="flex justify-between">
            <div className="mr-4">
              <div className="flex justify-end">
                <Typography variant="h5">
                  {exercise.name}
                </Typography>
              </div>
              <div className="mt-5" />
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {exercise.repetitions}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {exercise.weight}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {exercise.breakTime}
              </Typography>
            </div>
            <div>
              <Button variant="outlined" onClick={() => handleDelete(exercise.exerciseId || "")}>X</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
