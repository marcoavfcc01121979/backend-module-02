import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository"
import { AppError } from "@shared/errors/AppError"

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError("Token missing", 401)
  }

  // Bearer 87984465487872121
  // [0] = Bearer
  // [1] = 87984465487872121
  const [, token] = authHeader.split(" ")
  try {
    const { sub: user_id } = verify(
      token,
      "c67c7f8615939f506bd777d3151caccb"
    ) as IPayload

    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(user_id)

    if (!user) {
      throw new AppError("User does not exists!", 401)
    }

    request.user = {
      id: user_id
    }

    next()
  } catch {
    throw new AppError("Invalid token!", 401)
  }
}
