import DeleteExerciseRequest from "./delete-exercise-request";

describe('DeleteExerciseRequest', () => {
  let deletee: DeleteExerciseRequest;

  beforeEach(() => {
    deletee = {
      exerciseId: '1',
    };
  });

  it('should be able to create an exercise', () => {
    expect(deletee).toBeDefined();
  });

  it('should have an exerciseId property', () => {
    expect(deletee.exerciseId).toBe('1');
  });
});
