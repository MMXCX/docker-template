import jwt from 'jsonwebtoken'
import config from '../config'
import Token from '../models/token-model'

class TokenService {
  generateTokens = (payload: any) => {
    const accessToken = jwt.sign(
      payload,
      String(process.env.JWT_ACCESS_SECRET),
      { expiresIn: config.tokenExp.access.str })
    const refreshToken = jwt.sign(
      payload,
      String(process.env.JWT_REFRESH_SECRET),
      { expiresIn: config.tokenExp.refresh.str }
    )
    return {
      accessToken,
      refreshToken
    }
  }

  validateAccessToken = (accessToken: string) => {
    try {
      return jwt.verify(accessToken, String(process.env.JWT_ACCESS_SECRET))
    } catch (e) {
      return null
    }
  }

  validateRefreshToken = (refreshToken: string) => {
    try {
      return jwt.verify(refreshToken, String(process.env.JWT_ACCESS_SECRET))
    } catch (e) {
      return null
    }
  }

  saveRefreshToken = async (userId: string, refreshToken: string) => {
    const tokenData = await Token.findOne({ user: userId })
    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
    }
    return Token.create({ user: userId, refreshToken })
  }

  removeRefreshToken = async (refreshToken: string) => {
    return Token.deleteOne({ refreshToken })
  }

  findRefreshToken = async (refreshToken: string) => {
    return Token.findOne({ refreshToken })
  }
}

export default new TokenService