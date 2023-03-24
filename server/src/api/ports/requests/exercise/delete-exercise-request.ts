import { ExerciseInterface } from "../../../../interfaces";

type DeleteExerciseRequest = Omit<ExerciseInterface,
  'userId' |
  'recordId' |
  'name' |
  'weight' |
  'repetitions' |
  'breakTime' |
  'createdAt' |
  'updatedAt'>;

export default DeleteExerciseRequest;