import { hash } from 'bcrypt'
import { v4 } from 'uuid'
import { User } from '../models/user-model'
import ApiError from '../exceptions/api-error'
import config from '../config'
import UserDto from '../dtos/user-dto'
import tokenService from './token-service'
import mailService from './mail-service'

class UserService {
  registration = async (email: string, password: string) => {
    const candidate = await User.findOne({ email })
    if (candidate) throw ApiError.badRequest(`User with email ${email} already exist`)

    const hashPassword = await hash(password, config.bcrypt_salt)
    const activateLink = v4()

    const user = await User.create({ email, password: hashPassword, activateLink })
    const userDto = new UserDto(user)

    config.email.enabled && await mailService.sandActivationLink(email, `${process.env.API_URL}/api/activate/${activateLink}`)

    const tokens = tokenService.generateTokens({ ...userDto })
    await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken)
    return { ...tokens, userDto }
  }

  login = async () => {

  }

  logout = async () => {

  }

  activate = async () => {

  }

  refresh = async () => {

  }
}

export default new UserService()