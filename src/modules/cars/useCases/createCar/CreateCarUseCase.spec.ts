import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory"
import { AppError } from "@shared/errors/AppError"
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
  })

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Car",
      brand: "Brand",
      description: "Description Car",
      license_plate: "ABC-1234",
      fine_amount: 60,
      daily_rate: 100,
      category_id: "category"
    })

    expect(car).toHaveProperty("id")
  })

  it("should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car1",
        brand: "Brand",
        description: "Description Car",
        license_plate: "ABC-1234",
        fine_amount: 60,
        daily_rate: 100,
        category_id: "category"
      })

      await createCarUseCase.execute({
        name: "Car2",
        brand: "Brand",
        description: "Description Car",
        license_plate: "ABC-1234",
        fine_amount: 60,
        daily_rate: 100,
        category_id: "category"
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it("should not be able to create a car with exists available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      brand: "Brand",
      description: "Description Car",
      license_plate: "ABCD-1234",
      fine_amount: 60,
      daily_rate: 100,
      category_id: "category"
    })
    console.log(car)

    expect(car.available).toBe(true)
  })
})
