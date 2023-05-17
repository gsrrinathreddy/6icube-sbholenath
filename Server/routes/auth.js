import express from 'express';
import { deleteUserById, getAllUSers, register, updateByUserId, updateByUsername, login } from '../controllers/auth/authController.js';

const router = express.Router();
router.post('/register', register);
//router.put('/users/:username',updateByUsername);
router.put('/users/:_id', updateByUserId);
router.get('/', getAllUSers);
router.delete('/users/:_id', deleteUserById);
router.post('/login',login);
export default router;