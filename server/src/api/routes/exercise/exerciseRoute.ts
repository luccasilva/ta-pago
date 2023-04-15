import { Router } from 'express';
import { createExerciseAdapter, deleteExerciseAdapter, getExerciseAdapter } from '../../adapters';
import { createExercise, deleteExercise, getExercise } from '../../controllers';
import { verifyJWT } from '../../adapters/auth/verifyJWT';

const exerciseRoutes = Router();

exerciseRoutes.post('/exercise/get', verifyJWT, getExerciseAdapter, getExercise);

exerciseRoutes.post('/exercise', verifyJWT, createExerciseAdapter, createExercise);

exerciseRoutes.post('/exercise/delete', verifyJWT, deleteExerciseAdapter, deleteExercise);

export default exerciseRoutes;