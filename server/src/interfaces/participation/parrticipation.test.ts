import ParticipationInterface from "./participation";

describe('ParticipationInterface', () => {
  let participation: ParticipationInterface;

  beforeEach(() => {
    participation = {
      participationId: '1',
      userId: '1',
      groupId: '1',
      weekGoal: 5,
      currentWeekScore: 3,
      totalScore: 10,
    };
  });

  it('should be able to create a participation', () => {
    expect(participation).toBeDefined();
  });

  it('should have a participationId property', () => {
    expect(participation.participationId).toBe('1');
  });

  it('should have a userId property', () => {
    expect(participation.userId).toBe('1');
  });

  it('should have a groupId property', () => {
    expect(participation.groupId).toBe('1');
  });

  it('should have a weekGoal property', () => {
    expect(participation.weekGoal).toBe(5);
  });

  it('should have a currentWeekScore property', () => {
    expect(participation.currentWeekScore).toBe(3);
  });

  it('should have a totalScore property', () => {
    expect(participation.totalScore).toBe(10);
  });

  it('should have an optional createdAt property', () => {
    expect(participation.createdAt).toBeUndefined();
  });

  it('should have an optional updatedAt property', () => {
    expect(participation.updatedAt).toBeUndefined();
  });
});