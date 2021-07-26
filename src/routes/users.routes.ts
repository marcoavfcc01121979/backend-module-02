import { Router } from "express"
import multer from "multer"

import { UpdateUseAvatarController } from "../modules/accounts/useCases/updateUseAvatar/UpdateUseAvatarController"
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController"

import uploadConfig from "../config/upload"

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController()
const updateUseAvatarController = new UpdateUseAvatarController()

usersRoutes.post("/", createUserController.handle)
usersRoutes.patch(
  "/avatar",
  uploadAvatar.single("avatar"),
  updateUseAvatarController.handle
)

export { usersRoutes }
