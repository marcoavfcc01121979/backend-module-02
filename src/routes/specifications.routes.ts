import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

import { createSpecificationController } from "../modules/cars/useCases/createSpecification"
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController"

const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", createSpecificationController.handle)

export { specificationsRoutes }
