import { RecordInterface } from "../../../../interfaces";

type CreateRecordRequest = Omit<RecordInterface, 'userId' | 'recordId' | 'exercises' | 'createdAt' | 'updatedAt'>;

export default CreateRecordRequest;