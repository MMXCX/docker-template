import mongoose from 'mongoose'

export interface IUser {
  name: string
  age: number
}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  }
})

export const User = mongoose.model<IUser>('User', userSchema)
