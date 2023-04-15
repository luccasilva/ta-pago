import { RecordInterface } from "../../../../interfaces";

type DeleteRecordRequest = Omit<RecordInterface,
  'userId' |
  'exercises' |
  'name' |
  'description' |
  'createdAt' |
  'updatedAt'>;

export default DeleteRecordRequest;