import { ExerciseInterface } from "../../../../interfaces";

type CreateExerciseResponse = Omit<ExerciseInterface, 'recordId' | 'createdAt' | 'updatedAt'>;

export default CreateExerciseResponse;