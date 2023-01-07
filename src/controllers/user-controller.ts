import { Request, Response, NextFunction } from 'express'
import { User } from '../models/user-model'
import ApiError from '../exceptions/api-error'
import { validationResult } from 'express-validator'
import userService from '../services/user-service'

class UserController {
  registration = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest('Validation error', errors.array()))
      }
      const { email, password } = req.body
      const createdUser = await userService.registration(email, password)
      return res.json(createdUser)
    } catch (e) {
      next(e)
    }
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (e) {
      next(e)
    }
  }

  logout = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (e) {
      next(e)
    }
  }

  activate = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (e) {
      next(e)
    }
  }

  refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await User.find({ name: 'Andrey' })
      if (!users.length) {
        return next(ApiError.unauthorizedError())
      }
      return res.json(users)
    } catch (e) {
      next(e)
    }
  }


}

export default new UserController()