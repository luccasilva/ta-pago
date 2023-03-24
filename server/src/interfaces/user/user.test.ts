import UserInterface from "./user";

describe('UserInterface', () => {
  let user: UserInterface;

  beforeEach(() => {
    user = {
      userId: '1',
      email: 'test@example.com',
      name: 'John',
      password: 'password123',
    };
  });

  it('should be able to create a user', () => {
    expect(user).toBeDefined();
  });

  it('should have a userId property', () => {
    expect(user.userId).toBe('1');
  });

  it('should have an email property', () => {
    expect(user.email).toBe('test@example.com');
  });

  it('should have a name property', () => {
    expect(user.name).toBe('John');
  });

  it('should have a password property', () => {
    expect(user.password).toBe('password123');
  });

  it('should have an optional createdAt property', () => {
    expect(user.createdAt).toBeUndefined();
  });

  it('should have an optional updatedAt property', () => {
    expect(user.updatedAt).toBeUndefined();
  });
});