import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory"
import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory"
import { AppError } from "@shared/errors/AppError"
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"

let createCarSpecificationUseCase: CreateCarSpecificationUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory

describe("Create Car Specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory()
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    )
  })

  it("should not be able to add a new specification to a now-existent car", async () => {
    expect(async () => {
      const car_id = "1234"
      const specifications_id = ["54321"]

      await createCarSpecificationUseCase.execute({ car_id, specifications_id })
    }).rejects.toBeInstanceOf(AppError)
  })

  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car",
      brand: "Brand",
      description: "Description Car",
      license_plate: "ABC-1234",
      fine_amount: 60,
      daily_rate: 100,
      category_id: "category"
    })

    const specifications_id = ["54321"]

    await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id
    })
  })
})
