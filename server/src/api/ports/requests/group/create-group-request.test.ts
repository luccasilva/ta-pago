import CreateGroupRequest from "./create-group-request";

describe('CreateExerciseRequest', () => {
  let create: CreateGroupRequest;

  beforeEach(() => {
    create = {
      name: 'name',
      description: 'description',
    };
  });

  it('should be able to create an Group', () => {
    expect(create).toBeDefined();
  });

  it('should have an name property', () => {
    expect(create.name).toBe('name');
  });

  it('should have an description property', () => {
    expect(create.description).toBe('description');
  });
});
