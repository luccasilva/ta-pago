import CreateUserRequest from "./create-user-request";

describe('CreateUserRequest', () => {
  let create: CreateUserRequest;

  beforeEach(() => {
    create = {
      name: 'name',
      email: 'email',
      password: 'password',
    };
  });

  it('should be able to create an User', () => {
    expect(create).toBeDefined();
  });

  it('should have an name property', () => {
    expect(create.name).toBe('name');
  });

  it('should have an email property', () => {
    expect(create.email).toBe('email');
  });

  it('should have an password property', () => {
    expect(create.password).toBe('password');
  });
});
