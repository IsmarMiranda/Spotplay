import express from 'express'
import GenderRouter from './Router.js'
import GenderController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
// import { DataJson } from '../../store/DataJson.js'
import { DBMongo } from '../../store/DBMongo.js'
import Gender from '../../entity/Gender.js'

export const genderModule = () => {
  const servicesgender = new DBMongo()
  const genderController = new GenderController(servicesgender, Gender)
  const genderRouter = new GenderRouter(express.Router, genderController, response, HttpCode)
  return genderRouter._router
}
