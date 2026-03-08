import express from 'express'
import { UserController } from './user.controller.js'
import { signInValidation } from './dto/signIn.dto.js'
import { authMiddleware } from '../../middlewares/auth.middleware.js'
import { createUserValidation } from './dto/createUser.dto.js'

const router = express.Router()
const controller = new UserController()

router.post('/', createUserValidation, controller.createUser)
router.post('/sign-in', signInValidation, controller.signIn)
router.get('/me', authMiddleware, controller.getMe)

export default router