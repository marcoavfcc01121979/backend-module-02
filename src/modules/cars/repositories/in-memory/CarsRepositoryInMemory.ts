import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO"
import { Car } from "@modules/cars/infra/typeorm/entities/Car"
import { ICarsRepository } from "../ICarsRepository"

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = []

  async create({
    name,
    brand,
    description,
    license_plate,
    fine_amount,
    daily_rate,
    category_id
  }: ICreateCarDTO): Promise<void> {
    const car = new Car()

    Object.assign(car, {
      name,
      brand,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      category_id
    })

    this.cars.push(car)
  }
}

export { CarsRepositoryInMemory }
