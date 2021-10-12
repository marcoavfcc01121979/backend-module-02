import { inject, injectable } from "tsyringe"

import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository"
import { AppError } from "@shared/errors/AppError"

interface IRequest {
  name: string
  description: string
}

/**
 * [2] - Definir o tipo de retorno
 * [1] - Alterar o retorno do erro
 * [3] - Acessar o repositorio
 */

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {} // 3

  async execute({ name, description }: IRequest): Promise<void> {
    // 2
    const categoryAlreadyExists = await this.categoryRepository.findByName(name)

    if (categoryAlreadyExists) {
      // 1 -return response.status(400).json({ error: 'Category Already exists!' });
      throw new AppError("Category Already exists!")
    }

    this.categoryRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
