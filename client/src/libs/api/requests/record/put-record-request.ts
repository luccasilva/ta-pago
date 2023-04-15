import { RecordInterface } from "../../../../interfaces";

type PutRecordRequest = Omit<RecordInterface,
  'userId' |
  'name' |
  'description' |
  'exercises' |
  'createdAt' |
  'updatedAt'>
  & { exercises: string[] }

export default PutRecordRequest;