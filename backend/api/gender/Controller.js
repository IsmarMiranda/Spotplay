// los controller se encargar de realizar la logica del negocio

class GenderController {
  constructor (serviceGender, gender) {
    this._service = serviceGender
    this._entity = gender
  }

  async createNewGender (gender) {
    const newGender = new this._entity(gender)
    const response = await this._service.insertData('gender', newGender)
    return response
  }

  async getAllGender () {
    const response = await this._service.allData('gender')
    return response
  }

  findGender (album) {
  }

  async updateGender (id, album) {
    const response = await this._service.updateItem('gender', id, album)
    return response
  }

  async deleteGender (id) {
    const response = await this._service.deleteItem('gender', id)
    return response
  }
}

export default GenderController
