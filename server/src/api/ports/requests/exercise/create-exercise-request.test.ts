import CreateExerciseRequest from "./create-exercise-request";

describe('CreateExerciseRequest', () => {
  let create: CreateExerciseRequest;

  beforeEach(() => {
    create = {
      name: 'name',
      weight: '1',
      repetitions: '1',
      breakTime: '1',
    };
  });

  it('should be able to create an exercise', () => {
    expect(create).toBeDefined();
  });

  it('should have an name property', () => {
    expect(create.name).toBe('name');
  });

  it('should have an weight property', () => {
    expect(create.weight).toBe('1');
  });

  it('should have an repetitions property', () => {
    expect(create.repetitions).toBe('1');
  });

  it('should have an breakTime property', () => {
    expect(create.breakTime).toBe('1');
  });

  it('should not have additional properties', () => {
    const additionalProperties = Object.keys(create).filter(
      (key) =>
        key !== 'name' &&
        key !== 'weight' &&
        key !== 'repetitions' &&
        key !== 'breakTime'
    );

    expect(additionalProperties.length).toBe(0);
  });

  it('should have a numeric weight value', () => {
    expect(Number(create.weight)).not.toBeNaN();
  });

  it('should have a numeric repetitions value', () => {
    expect(Number(create.repetitions)).not.toBeNaN();
  });

  it('should have a numeric breakTime value', () => {
    expect(Number(create.breakTime)).not.toBeNaN();
  });

});
