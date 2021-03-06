import { Router } from "express"
import multer from "multer"

import uploadConfig from "@config/upload"
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController"
import { UpdateUseAvatarController } from "@modules/accounts/useCases/updateUseAvatar/UpdateUseAvatarController"
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated"

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig)

const createUserController = new CreateUserController()
const updateUseAvatarController = new UpdateUseAvatarController()

usersRoutes.post("/", createUserController.handle)
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUseAvatarController.handle
)

export { usersRoutes }
