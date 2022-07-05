import express from 'express'
import ArtistRouter from './Router.js'
import ArtistController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import Artist from '../../entity/Artist.js'

export const artistModule = () => {
  const servicesArtist = new DataJson()
  const artistController = new ArtistController(servicesArtist, Artist)
  const artistRouter = new ArtistRouter(express.Router, artistController, response, HttpCode)
  return artistRouter._router
}
