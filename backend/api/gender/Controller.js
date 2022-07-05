// los controller se encargar de realizar la logica del negocio

class GenderController {
  constructor (serviceGender, gender) {
    this._service = serviceGender
    this._entity = gender
  }

  getAllGender () {
    const response = this._service.all('gender')
    return response
  }

  createNewGender (gender) {
    const newGender = new this._entity(gender)
    const response = this._service.save('gender', newGender)
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

export default GenderController
