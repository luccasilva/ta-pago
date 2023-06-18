import CreateRecordRequest from "./create-record-request";

describe('CreateRecordRequest', () => {
  let create: CreateRecordRequest;

  beforeEach(() => {
    create = {
      name: 'name',
      description: 'description',
    };
  });

  it('should be able to create an Record', () => {
    expect(create).toBeDefined();
  });

  it('should have an name property', () => {
    expect(create.name).toBe('name');
  });

  it('should have an description property', () => {
    expect(create.description).toBe('description');
  });

  it('should have defined name and description properties', () => {
    expect(create.name).toBeDefined();
    expect(create.description).toBeDefined();
  });

  it('should have name and description properties of type string', () => {
    expect(typeof create.name).toBe('string');
    expect(typeof create.description).toBe('string');
  });

  it('should have a non-empty name value', () => {
    expect(create.name.length).toBeGreaterThan(0);
  });

  it('should have a non-empty description value', () => {
    expect(create.description.length).toBeGreaterThan(0);
  });
  
  it('should not have additional properties', () => {
    const additionalProperties = Object.keys(create).filter(
      (key) => key !== 'name' && key !== 'description'
    );

    expect(additionalProperties.length).toBe(0);
  });
  
});
