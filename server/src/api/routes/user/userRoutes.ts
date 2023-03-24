import { Router } from 'express';
import { createUserAdapter } from '../../adapters';
import { createUser } from '../../controllers';

const userRoutes = Router();

userRoutes.post('/user', createUserAdapter, createUser);

export default userRoutes;