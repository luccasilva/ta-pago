interface ExerciseInRecord {
  exerciseId: string;
  name: string;
  weight: string;
  repetitions: string;
  breakTime: string;
}

export default interface RecordInterface {
  recordId?: string;
  userId: string;
  name: string;
  description: string;
  exercises?: ExerciseInRecord[];
  createdAt?: Date;
  updatedAt?: Date;
}
