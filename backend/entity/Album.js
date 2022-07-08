export default class Album {
  constructor (album) {
    // this._id = null
    this._name = album.name
    this._description = album.description
    this._image = album.image
    this._year = album.year
    this._idArtista = album.idArtista
    this._idListsongs = album.idListsongs
  }
}
