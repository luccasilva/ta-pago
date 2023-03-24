import { Router } from 'express';
import { createExerciseAdapter, deleteExerciseAdapter, getExerciseAdapter } from '../../adapters';
import { createExercise, deleteExercise, getExercise } from '../../controllers';
import { verifyJWT } from '../../adapters/auth/verifyJWT';

const exerciseRoutes = Router();

exerciseRoutes.get('/exercise', verifyJWT, getExerciseAdapter, getExercise);

exerciseRoutes.post('/exercise', verifyJWT, createExerciseAdapter, createExercise);

exerciseRoutes.delete('/exercise', verifyJWT, deleteExerciseAdapter, deleteExercise);

export default exerciseRoutes;