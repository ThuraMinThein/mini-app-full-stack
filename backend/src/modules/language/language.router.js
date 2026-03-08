import express from 'express';
import { LanguageController } from './language.controller.js';
import { authMiddleware } from '../../middlewares/auth.middleware.js'

const router = express.Router()
const controller = new LanguageController()

router.post('/seed', authMiddleware, controller.seed)

router.get('/', controller.findAll)

export default router

