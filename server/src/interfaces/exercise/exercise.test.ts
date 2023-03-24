import ExerciseInterface from "./exercise";

describe('ExerciseInterface', () => {
  let exercise: ExerciseInterface;

  beforeEach(() => {
    exercise = {
      exerciseId: '1',
      userId: '1',
      recordId: '1',
      name: 'Bench Press',
      weight: '100',
      repetitions: '10',
      breakTime: '60',
    };
  });

  it('should be able to create an exercise', () => {
    expect(exercise).toBeDefined();
  });

  it('should have an optional exerciseId property', () => {
    expect(exercise.exerciseId).toBe('1');
  });

  it('should have an optional userId property', () => {
    expect(exercise.userId).toBe('1');
  });

  it('should have an recordId property', () => {
    expect(exercise.recordId).toBe('1');
  });

  it('should have an name property', () => {
    expect(exercise.name).toBe('Bench Press');
  });

  it('should have an weight property', () => {
    expect(exercise.weight).toBe('100');
  });

  it('should have an repetitions property', () => {
    expect(exercise.repetitions).toBe('10');
  });

  it('should have an breakTime property', () => {
    expect(exercise.breakTime).toBe('60');
  });

  it('should have an optional createdAt property', () => {
    expect(exercise.createdAt).toBeUndefined();
  });

  it('should have an optional updatedAt property', () => {
    expect(exercise.updatedAt).toBeUndefined();
  });
});
