// los controller se encargar de realizar la logica del negocio

class PlaylistController {
  constructor (servicePlaylist, playlist) {
    this._service = servicePlaylist
    this._entity = playlist
  }

  getAllPlaylist () {
    const response = this._service.all('playlist')
    return response
  }

  createNewPlaylist (playlist) {
    const newPlaylist = new this._entity(playlist)
    const response = this._service.save('playlist', newPlaylist)
    return response
  }

  updateSong (song) {
    console.log(song)
    return 'updated a song'
  }

  deleteSong (id) {
    console.log(id)
    return 'deleted a song'
  }
}

export default PlaylistController
