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
  

});
