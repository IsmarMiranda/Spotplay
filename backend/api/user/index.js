import UserController from './Controller.js'
import UserRouter from './Routes.js'
// import { DataJson } from '../../store/DataJson.js'
import User from '../../entity/User.js'
import { DBMongo } from '../../store/DBMongo.js'
import { helpers } from '../../lib/helpers.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { validateCreteUser } from './validate.js'
export const userModule = (expressRouter) => {
  const userServices = new DBMongo()
  const userController = new UserController(userServices, User, helpers.encryptPassword)
  const userRouter = new UserRouter(expressRouter, userController, response, HttpCode, validateCreteUser)
  return userRouter._router
}
