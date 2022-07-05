// los controller se encargar de realizar la logica del negocio

class TipoCuentaController {
  constructor (serviceTipoCuenta, tipocuenta) {
    this._service = serviceTipoCuenta
    this._entity = tipocuenta
  }

  getAllTipoCuenta () {
    const response = this._service.all('tipocuenta')
    return response
  }

  createNewTipoCuenta (tipocuenta) {
    const newTipoCuenta = new this._entity(tipocuenta)
    const response = this._service.save('tipocuenta', newTipoCuenta)
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

export default TipoCuentaController
