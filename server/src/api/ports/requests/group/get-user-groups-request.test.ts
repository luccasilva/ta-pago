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

  it('should have a numeric userId value', () => {
    expect(Number(get.userId)).not.toBeNaN();
  });

  it('should not have additional properties', () => {
    const additionalProperties = Object.keys(get).filter(
      (key) => key !== 'userId'
    );

    expect(additionalProperties.length).toBe(0);
  });

  it('should have a userId value greater than 0', () => {
    expect(Number(get.userId)).toBeGreaterThan(0);
  });

  it('should have a string userId value of length 1 or more', () => {
    expect(Number(get.userId)).toBeGreaterThan(0);
  });

});
