import { Router } from 'express';
import { createRecordAdapter, deleteRecordAdapter, getRecordAdapter, putRecordAdapter } from '../../adapters';
import { addRecordExercises, createRecord, deleteRecord, getRecord } from '../../controllers';
import { verifyJWT } from '../../adapters/auth/verifyJWT';

const recordRoutes = Router();

recordRoutes.get('/record', verifyJWT, getRecordAdapter, getRecord);

recordRoutes.post('/record', verifyJWT, createRecordAdapter, createRecord);

recordRoutes.delete('/record', verifyJWT, deleteRecordAdapter, deleteRecord);

recordRoutes.put('/record', verifyJWT, putRecordAdapter, addRecordExercises);

export default recordRoutes;