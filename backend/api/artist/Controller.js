// los controller se encargar de realizar la logica del negocio

class ArtistController {
  constructor (serviceArtist, artist) {
    this._service = serviceArtist
    this._entity = artist
  }

  async createNewArtist (artist) {
    const newArtist = new this._entity(artist)
    const response = await this._service.insertData('artist', newArtist)
    return response
  }

  async getAllArtist () {
    const response = await this._service.allData('artist')
    return response
  }

  findArtist (album) {
  }

  async updateArtist (id, album) {
    const response = await this._service.updateItem('artist', id, album)
    return response
  }

  async deleteArtist (id) {
    const response = await this._service.deleteItem('artist', id)
    return response
  }
}

export default ArtistController
