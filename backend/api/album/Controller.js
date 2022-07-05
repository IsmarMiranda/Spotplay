// los controller se encargar de realizar la logica del negocio

class AlbumController {
  constructor (serviceArtist, artist) {
    this._service = serviceArtist
    this._entity = artist
  }

  getAllAlbum () {
    const response = this._service.all('album')
    return response
  }

  createNewAlbum (album) {
    const newAlbum = new this._entity(album)
    const response = this._service.save('album', newAlbum)
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

export default AlbumController
