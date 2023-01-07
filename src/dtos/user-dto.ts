import { IUser } from '../models/user-model'
import { Types } from 'mongoose'

class UserDto {
  id: string
  email: string
  isActivated: boolean | undefined

  constructor(user: IUser & { _id: Types.ObjectId }) {
    this.id = user._id.toString()
    this.email = user.email
    this.isActivated = user.isActivated
  }
}

export default UserDto