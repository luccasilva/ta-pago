import { ExerciseInterface } from "../../../../interfaces";

type DeleteExerciseResponse = Omit<ExerciseInterface, 'recordId' | 'createdAt' | 'updatedAt'>;

export default DeleteExerciseResponse;