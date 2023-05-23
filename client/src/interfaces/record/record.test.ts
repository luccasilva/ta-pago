import RecordInterface from "./record";

describe('RecordInterface', () => {
  let record: RecordInterface;

  beforeEach(() => {
    record = {
      recordId: '1',
      userId: '1',
      name: 'Running',
      description: '5 km run',
      exercises: undefined,
    };
  });

  it('should be able to create a record', () => {
    expect(record).toBeDefined();
  });

  it('should have a recordId property', () => {
    expect(record.recordId).toBe('1');
  });

  it('should have a userId property', () => {
    expect(record.userId).toBe('1');
  });

  it('should have a name property', () => {
    expect(record.name).toBe('Running');
  });

  it('should have a description property', () => {
    expect(record.description).toBe('5 km run');
  });

  it('should have a exercises property', () => {
    expect(record.exercises).toBe(undefined);
  });

  it('should have an optional createdAt property', () => {
    expect(record.createdAt).toBeUndefined();
  });

  it('should have an optional updatedAt property', () => {
    expect(record.updatedAt).toBeUndefined();
  });
});