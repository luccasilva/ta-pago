import GetGroupInfoRequest from "./get-group-info-request";

describe('CreateExerciseRequest', () => {
  let get: GetGroupInfoRequest;

  beforeEach(() => {
    get = {
      groupId: '1',
    };
  });

  it('should be able to create an Group', () => {
    expect(get).toBeDefined();
  });

  it('should have an groupId property', () => {
    expect(get.groupId).toBe('1');
  });
});
