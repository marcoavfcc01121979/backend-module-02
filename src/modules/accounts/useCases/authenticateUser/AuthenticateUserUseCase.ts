import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { inject, injectable } from "tsyringe"

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository"
import { AppError } from "@shared/errors/AppError"

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Usuario existe
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError("Email or password incorrect")
    }

    const passwordMatch = await compare(password, user.password)

    // Senha esta incorreta
    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!")
    }

    const token = sign({}, "c67c7f8615939f506bd777d3151caccb", {
      subject: user.id,
      expiresIn: "1d"
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn
    // Gerar jsonwebtoken
  }
}

export { AuthenticateUserUseCase }
