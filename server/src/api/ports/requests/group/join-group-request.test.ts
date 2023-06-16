import JoinGroupRequest from "./join-group-request";

describe('CreateExerciseRequest', () => {
  let join: JoinGroupRequest;

  beforeEach(() => {
    join = {
      tag: 'tag',
    };
  });

  it('should be able to join an Group', () => {
    expect(join).toBeDefined();
  });

  it('should have an tag property', () => {
    expect(join.tag).toBe('tag');
  });
});
