// los controller se encargar de realizar la logica del negocio

class SongController {
  constructor (serviceSong, song) {
    this._service = serviceSong
    this._entity = song
  }

  async createNewSong (song) {
    const newUser = new this._entity(song)
    console.log(newUser)
    const response = await this._service.insertData('song', newUser)
    return response
  }

  async getAllSong () {
    const response = await this._service.allData('song')
    return response
  }

  findSong (song) {
  }

  async updateSong (id, song) {
    const response = await this._service.updateItem('song', id, song)
    return response
  }

  async deleteSong (id) {
    const response = await this._service.deleteItem('song', id)
    return response
  }
}

export default SongController
