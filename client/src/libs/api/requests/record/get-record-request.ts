import { RecordInterface } from "../../../../interfaces";

type GetRecordRequest = Omit<RecordInterface,
  'recordId' |
  'exercises' |
  'name' |
  'description' |
  'createdAt' |
  'updatedAt'>;

export default GetRecordRequest;