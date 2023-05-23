import { ExerciseInterface } from "../../../../interfaces";

type CreateExerciseRequest = Omit<ExerciseInterface, 'exerciseId' | 'userId' | 'recordId' | 'createdAt' | 'updatedAt'>;

export default CreateExerciseRequest;