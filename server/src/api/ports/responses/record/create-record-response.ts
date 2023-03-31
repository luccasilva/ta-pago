import { RecordInterface } from "../../../../interfaces";

type CreateRecordResponse = Omit<RecordInterface, 'createdAt' | 'updatedAt'>;

export default CreateRecordResponse;