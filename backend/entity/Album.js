export default class Album {
  constructor (album) {
    this._id = null
    this._name = album.name
    this._description = album.description
    this._idArtista = album.idArtista
    this._year = album.year
    this._image = album.image
    this._idListSongs = album.idListSongs
  }
}
