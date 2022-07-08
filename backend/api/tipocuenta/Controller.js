// los controller se encargar de realizar la logica del negocio

class TipoCuentaController {
  constructor (serviceTipoCuenta, tipocuenta) {
    this._service = serviceTipoCuenta
    this._entity = tipocuenta
  }

  async createNewAccount (tipocuenta) {
    const newAccount = new this._entity(tipocuenta)
    const response = await this._service.insertData('tipocuenta', newAccount)
    return response
  }

  async getAllAccount () {
    const response = await this._service.allData('tipocuenta')
    return response
  }

  findAccount (account) {
  }

  async updateAccount (id, song) {
    const response = await this._service.updateItem('tipocuenta', id, song)
    return response
  }

  async deleteAccount (id) {
    const response = await this._service.deleteItem('tipocuenta', id)
    return response
  }
}

export default TipoCuentaController
