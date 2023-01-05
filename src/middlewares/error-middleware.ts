import { NextFunction, Request, Response } from 'express'

const errorMiddleware = (err: any, req: Request, res: Response, _next: NextFunction) => {
  return res.status(err.status).json({
    status: err.status,
    message: err.message,
    errors: err.errors
  })
}

export default errorMiddleware