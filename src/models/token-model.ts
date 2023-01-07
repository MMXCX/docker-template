import { model, Schema } from 'mongoose'

interface IToken {
  user: Schema.Types.ObjectId,
  refreshToken: string
}

const tokenSchema = new Schema<IToken>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true }
})

export default model<IToken>('Token', tokenSchema)