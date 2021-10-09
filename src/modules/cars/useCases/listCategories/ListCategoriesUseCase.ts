import { inject, injectable } from "tsyringe"

import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository"
import { Category } from "@modules/cars/infra/typeorm/entities/Category"

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {} // 3

  async execute(): Promise<Category[]> {
    // 2
    const categories = await this.categoryRepository.list()

    return categories
  }
}

export { ListCategoriesUseCase }
