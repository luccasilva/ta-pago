import GetExerciseRequest from "./get-exercise-request";

describe('DeleteExerciseRequest', () => {
  let get: GetExerciseRequest;

  beforeEach(() => {
    get = {
      userId: '1',
    };
  });

  it('should be able to create an exercise', () => {
    expect(get).toBeDefined();
  });

  it('should have an userId property', () => {
    expect(get.userId).toBe('1');
  });
});
