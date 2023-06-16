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
});
