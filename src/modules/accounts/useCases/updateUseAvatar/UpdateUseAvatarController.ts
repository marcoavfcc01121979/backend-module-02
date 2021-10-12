import { Request, Response } from "express"
import { container } from "tsyringe"

import { UpdateUseAvatarUseCase } from "./UpdateUseAvatarUseCase"

class UpdateUseAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user

    // Receber arquivo
    const avatar_file = request.file.filename

    const updateUserAvatarUseCase = container.resolve(UpdateUseAvatarUseCase)

    await updateUserAvatarUseCase.execute({ user_id: id, avatar_file })

    return response.status(204).send()
  }
}

export { UpdateUseAvatarController }
