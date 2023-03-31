export default interface ParticipationInterface {
  participationId?: string;
  userId: string;
  groupId: string;
  weekGoal: number;
  currentWeekScore: number;
  totalScore: number;
  createdAt?: Date;
  updatedAt?: Date;
}
