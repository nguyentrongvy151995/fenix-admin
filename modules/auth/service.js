// @ts-check
const crypto = require("crypto");

const authRepository = require("./repository");
const { setPassword, validPassword } = require("../../helpers/auth.helper");
const { generateToken } = require("../../helpers/auth.helper");
const { ERROR_MESSAGES } = require("../../constants/common");

class AuthService {
  async register({ userName, email, fullName, password }) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = setPassword(password, salt);
    const user = await authRepository.getOne({
      where: {
        email,
      },
    });

    if (user) {
      throw new Error(ERROR_MESSAGES.EMAIL_EXISTED);
    }

    return authRepository.create({
      salt,
      email,
      userName,
      fullName,
      password: hash,
    });
  }

  async login({ userName, password }) {
    const user = await authRepository.getOne({
      where: {
        userName,
      },
    });

    if (!user) {
      throw new Error(ERROR_MESSAGES.EMAIL_OR_PASSWORD_NOT_EXIST);
    }

    const isValidPassword = validPassword(password, user);

    if (!isValidPassword) {
      throw new Error(ERROR_MESSAGES.EMAIL_OR_PASSWORD_NOT_EXIST);
    }

    user.accessToken = await generateToken(user);
    delete user['userName']
    user.user = {userName};

    return user;
  }
}

module.exports = new AuthService();
