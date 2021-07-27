import { InMemoryCategoriesRepository } from "../../repositories/in-memory/InMemoryCategoriesRepository"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: InMemoryCategoriesRepository

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new InMemoryCategoriesRepository()
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    )
  })

  it("should be able to create a new category", () => {})
})
