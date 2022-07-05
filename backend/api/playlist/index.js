import express from 'express'
import PlaylistRouter from './Router.js'
import PlaylistController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import Playlist from '../../entity/Playlist.js'

export const playlistModule = () => {
  const servicesPlaylist = new DataJson()
  const playlistController = new PlaylistController(servicesPlaylist, Playlist)
  const playlistRouter = new PlaylistRouter(express.Router, playlistController, response, HttpCode)
  return playlistRouter._router
}
