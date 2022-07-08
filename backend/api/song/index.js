import express from 'express'
import SongRouter from './Router.js'
import SongController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
// import { DataJson } from '../../store/DataJson.js'
import { DBMongo } from '../../store/DBMongo.js'
import Song from '../../entity/Song.js'

export const songMudule = () => {
  const servicesSong = new DBMongo()
  const songController = new SongController(servicesSong, Song)
  const songRouter = new SongRouter(express.Router, songController, response, HttpCode)
  return songRouter._router
}
