import GetUserGroupsRequest from "./get-user-groups-request";

describe('CreateExerciseRequest', () => {
  let get: GetUserGroupsRequest;

  beforeEach(() => {
    get = {
      userId: '1',
    };
  });

  it('should be able to create an Group', () => {
    expect(get).toBeDefined();
  });

  it('should have an userId property', () => {
    expect(get.userId).toBe('1');
  });
});
