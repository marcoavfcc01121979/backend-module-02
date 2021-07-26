// Adicionar coluna avatar na tabela users
// refatorar usuario com coluna avatar
// configuração upload multer
// criar regras de negocio de upload

import { inject, injectable } from "tsyringe"
import { IUsersRepository } from "../../repositories/IUsersRepository"

// criar controller
interface IRequest {
  user_id: string
  avatar_file: string
}

@injectable()
class UpdateUseAvatarUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id)

    user.avatar = avatar_file

    await this.usersRepository.create(user)
  }
}

export { UpdateUseAvatarUseCase }
