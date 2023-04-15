import { RecordInterface } from "../../../../interfaces";

type DeleteRecordResponse = Omit<RecordInterface, 'exercises' | 'createdAt' | 'updatedAt'>;

export default DeleteRecordResponse;