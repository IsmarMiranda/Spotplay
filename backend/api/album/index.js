import express from 'express'
import AlbumRouter from './Router.js'
import AlbumController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
// import { DataJson } from '../../store/DataJson.js'
import { DBMongo } from '../../store/DBMongo.js'
import Album from '../../entity/Album.js'

export const albumModule = () => {
  const servicesArtist = new DBMongo()
  const albumController = new AlbumController(servicesArtist, Album)
  const albumRouter = new AlbumRouter(express.Router, albumController, response, HttpCode)
  return albumRouter._router
}
