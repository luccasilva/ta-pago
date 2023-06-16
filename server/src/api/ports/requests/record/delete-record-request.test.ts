import DeleteRecordRequest from "./delete-record-request";

describe('deleteRecordRequest', () => {
  let deletee: DeleteRecordRequest;

  beforeEach(() => {
    deletee = {
      recordId: 'recordId',
    };
  });

  it('should be able to delete an Record', () => {
    expect(deletee).toBeDefined();
  });

  it('should have an recordId property', () => {
    expect(deletee.recordId).toBe('recordId');
  });
});
