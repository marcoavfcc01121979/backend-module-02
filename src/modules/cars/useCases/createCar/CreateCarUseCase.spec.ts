import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory"
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
  })

  it("should be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "Name Car",
      brand: "Brand",
      description: "Description Car",
      license_plate: "ABC-1234",
      fine_amount: 60,
      daily_rate: 100,
      category_id: "category"
    })
  })
})
