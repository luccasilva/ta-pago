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

  it('should have a string recordId value', () => {
    expect(typeof deletee.recordId).toBe('string');
  });

  it('should not have additional properties', () => {
    const additionalProperties = Object.keys(deletee).filter(
      (key) => key !== 'recordId'
    );

    expect(additionalProperties.length).toBe(0);
  });

});
