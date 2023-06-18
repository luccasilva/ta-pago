import GetGroupInfoRequest from "./get-group-info-request";

describe('CreateExerciseRequest', () => {
  let get: GetGroupInfoRequest;

  beforeEach(() => {
    get = {
      groupId: '1',
    };
  });

  it('should be able to create a GetGroupInfoRequest', () => {
    expect(get).toBeDefined();
  });

  it('should have a groupId property', () => {
    expect(get.groupId).toBe('1');
  });

  it('should not have extra properties', () => {
    const keys = Object.keys(get);
    expect(keys).toEqual(['groupId']);
  });  
  
});
