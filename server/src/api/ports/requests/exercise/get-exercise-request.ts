import { ExerciseInterface } from "../../../../interfaces";

type GetExerciseRequest = Omit<ExerciseInterface,
  'exerciseId' |
  'recordId' |
  'name' |
  'weight' |
  'repetitions' |
  'breakTime' |
  'createdAt' |
  'updatedAt'>;

export default GetExerciseRequest;