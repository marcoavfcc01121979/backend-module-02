import { Router } from "express"

import { createSpecificationController } from "../modules/cars/useCases/createSpecification"
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController"

const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.post("/", createSpecificationController.handle)

export { specificationsRoutes }
