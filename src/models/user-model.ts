import mongoose from 'mongoose'

export interface IUser {
  email: string
  password: string
  isActivated?: boolean
  activateLink?: string
}

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activateLink: { type: String }
})

export const User = mongoose.model<IUser>('User', userSchema)
