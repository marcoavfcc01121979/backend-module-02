import { inject, injectable } from "tsyringe"

import { Category } from "../../entities/Category"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

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
