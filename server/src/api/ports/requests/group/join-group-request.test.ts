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

  it('should have a non-empty tag value', () => {
    expect(join.tag.length).toBeGreaterThan(0);
  });

  it('should not have additional properties', () => {
    const additionalProperties = Object.keys(join).filter(
      (key) => key !== 'tag'
    );

    expect(additionalProperties.length).toBe(0);
  });

  it('should have a string tag value', () => {
    expect(typeof join.tag).toBe('string');
  });

  it('should not allow a tag value with leading or trailing whitespace', () => {
    expect(join.tag.trim()).toBe(join.tag);
  });


});
