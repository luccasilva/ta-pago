import { Router } from 'express';
import { loginAdapter } from '../../adapters/auth/login';
import { login } from '../../controllers';

const authRoutes = Router();

authRoutes.post('/login', loginAdapter, login);

export default authRoutes;