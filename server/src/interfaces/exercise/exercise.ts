export default interface ExerciseInterface {
  exerciseId?: string;
  userId: string;
  recordId: string | null;
  name: string;
  weight: string;
  repetitions: string;
  breakTime: string;
  createdAt?: Date;
  updatedAt?: Date;
}
