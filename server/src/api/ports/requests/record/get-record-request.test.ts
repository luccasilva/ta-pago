import GetRecordRequest from "./get-record-request";

describe('GetRecordRequest', () => {
  let get: GetRecordRequest;

  beforeEach(() => {
    get = {
      userId: 'userId',
    };
  });

  it('should be able to Get an Record', () => {
    expect(get).toBeDefined();
  });

  it('should have an userId property', () => {
    expect(get.userId).toBe('userId');
  });
});
