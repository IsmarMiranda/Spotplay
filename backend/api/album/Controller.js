// los controller se encargar de realizar la logica del negocio

class AlbumController {
  constructor (serviceArtist, artist) {
    this._service = serviceArtist
    this._entity = artist
  }

  async createNewAlbum (album) {
    const newAlbum = new this._entity(album)
    const response = await this._service.insertData('album', newAlbum)
    return response
  }

  async getAllAlbum () {
    const response = await this._service.allData('album')
    return response
  }

  findSong (song) {
  }

  async updateAlbum (id, album) {
    const response = await this._service.updateItem('album', id, album)
    return response
  }

  async deleteAlbum (id) {
    const response = await this._service.deleteItem('album', id)
    return response
  }
}

export default AlbumController
