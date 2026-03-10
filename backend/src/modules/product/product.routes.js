import express from 'express'
import { authMiddleware } from '../../middlewares/auth.middleware.js'
import { ProductController } from './product.controller.js'
import { createProductValidation } from './dto/createProduct.dto.js'
import { updateProductValidation } from './dto/updateProduct.dto.js'

const router = express.Router()
const controller = new ProductController()

router.post('/seed', authMiddleware, controller.seed)

router.post("/", authMiddleware, createProductValidation, controller.create)
router.get('/', authMiddleware, controller.getAll)
router.patch('/:id', authMiddleware, updateProductValidation, controller.update)

export default router

