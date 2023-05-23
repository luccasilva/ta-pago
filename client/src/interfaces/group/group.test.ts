import GroupInterface from "./group";

describe('GroupInterface', () => {
  let group: GroupInterface;

  beforeEach(() => {
    group = {
      groupId: '1',
      tag: 'test',
      name: 'Test Group',
      description: 'This is a test group',
    };
  });

  it('should be able to create a group', () => {
    expect(group).toBeDefined();
  });

  it('should have a groupId property', () => {
    expect(group.groupId).toBe('1');
  });

  it('should have a tag property', () => {
    expect(group.tag).toBe('test');
  });

  it('should have a name property', () => {
    expect(group.name).toBe('Test Group');
  });

  it('should have a description property', () => {
    expect(group.description).toBe('This is a test group');
  });

  it('should have an optional createdAt property', () => {
    expect(group.createdAt).toBeUndefined();
  });

  it('should have an optional updatedAt property', () => {
    expect(group.updatedAt).toBeUndefined();
  });
});