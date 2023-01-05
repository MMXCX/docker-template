import { Router } from 'express'
import userController from '../controllers/user-controller'

const router = Router()

router.get('/refresh', userController.refresh)

export default router