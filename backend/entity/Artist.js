export default class Artist {
  constructor (artista) {
    // this._id = null
    this._name = artista.name
    this._image = artista.image
    this._listeners = artista.listeners
  }
}
