export default class TipoCuenta {
  constructor (tipocuenta) {
    this._id = null
    this._name = tipocuenta.name
    this.price = tipocuenta.price
  }
}
