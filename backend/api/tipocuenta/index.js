import express from 'express'
import TipoCuentaRouter from './Router.js'
import TipoCuentaController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
// import { DataJson } from '../../store/DataJson.js'
import { DBMongo } from '../../store/DBMongo.js'
import TipoCuenta from '../../entity/TipoCuenta.js'

export const tipoCuentaModule = () => {
  const servicesTipoCuenta = new DBMongo()
  const tipocuentaController = new TipoCuentaController(servicesTipoCuenta, TipoCuenta)
  const tipocuentaRouter = new TipoCuentaRouter(express.Router, tipocuentaController, response, HttpCode)
  return tipocuentaRouter._router
}
