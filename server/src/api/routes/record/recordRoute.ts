import { Router } from 'express';
import { createRecordAdapter, deleteRecordAdapter, getRecordAdapter, putRecordAdapter } from '../../adapters';
import { addRecordExercises, createRecord, deleteRecord, getRecord } from '../../controllers';
import { verifyJWT } from '../../adapters/auth/verifyJWT';

const recordRoutes = Router();

recordRoutes.post('/record/get', verifyJWT, getRecordAdapter, getRecord);

recordRoutes.post('/record', verifyJWT, createRecordAdapter, createRecord);

recordRoutes.post('/record/delete', verifyJWT, deleteRecordAdapter, deleteRecord);

recordRoutes.put('/record', verifyJWT, putRecordAdapter, addRecordExercises);

export default recordRoutes;