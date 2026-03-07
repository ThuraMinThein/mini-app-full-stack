import express from 'express'
import { UserController } from './user.controller.js'
import { signInValidation } from './dto/signIn.dto.js'

const router = express.Router()
const controller = new UserController()

router.post('/sign-in', signInValidation, controller.signIn)

export default router