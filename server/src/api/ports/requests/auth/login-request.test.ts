import LoginRequest from "./login-request";

describe('AuthRequest', () => {
  let login: LoginRequest;

  beforeEach(() => {
    login = {
      email: 'mail@mail.com',
      password: 'pass',
    };
  });

  it('should be able to create an exercise', () => {
    expect(login).toBeDefined();
  });

  it('should have an email property', () => {
    expect(login.email).toBe('mail@mail.com');
  });

  it('should have an password property', () => {
    expect(login.password).toBe('pass');
  });
});
