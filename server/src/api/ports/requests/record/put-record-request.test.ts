import PutRecordRequest from "./put-record-request";

describe('GetRecordRequest', () => {
  let get: PutRecordRequest;

  beforeEach(() => {
    get = {
      exercises: ['1', '2'],
    };
  });

  it('should be able to Get an Record', () => {
    expect(get).toBeDefined();
  });

  it('should have an exercises property', () => {
    expect(get.exercises).toBe(get.exercises);
  });
});
