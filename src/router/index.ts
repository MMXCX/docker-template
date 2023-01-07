import { Router } from 'express'
import userController from '../controllers/user-controller'
import { body } from 'express-validator'

const router = Router()

router.post(
  '/registration',
  body('email').isEmail().withMessage('Incorrect email format'),
  body('password').isLength({ min: 8, max: 128 }).withMessage('Password length from 8 to 128'),
  userController.registration
)
router.post('/login', userController.login)
router.get('/logout', userController.logout)
router.get('/activate', userController.activate)
router.get('/refresh', userController.refresh)

export default router