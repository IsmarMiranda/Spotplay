// los controller se encargar de realizar la logica del negocio

class ArtistController {
  constructor (serviceArtist, artist) {
    this._service = serviceArtist
    this._entity = artist
  }

  getAllArtist () {
    const response = this._service.all('artist')
    return response
  }

  createNewArtist (artist) {
    const newArtist = new this._entity(artist)
    const response = this._service.save('artist', newArtist)
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

export default ArtistController
