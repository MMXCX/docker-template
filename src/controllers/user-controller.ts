import { Request, Response, NextFunction } from 'express'
import { User } from '../models/User'
import ApiError from '../exceptions/api-error'

class UserController {
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