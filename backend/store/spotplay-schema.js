import mongoose from 'mongoose'

const albumSchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _description: { type: String, required: true },
  _image: { type: String, required: true },
  _year: { type: Number, required: true },
  _idArtista: { type: String, required: true },
  _idListsongs: { type: String, required: true }
})

const artistSchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _image: { type: String, required: true },
  _listeners: { type: Number, required: true }
})

const genderSchema = new mongoose.Schema({
  _name: { type: String, required: true }
})

const songSchema = new mongoose.Schema({
  _title: { type: String, required: true },
  _uri: { type: String, required: true },
  _duration: { type: String, required: true },
  _image: { type: String, required: true },
  _idArtist: { type: String, required: true },
  _idGender: { type: String, required: true }
})

const playListSchema = new mongoose.Schema({
  _idPlaylist: { type: String, required: true },
  _idSong: { type: String, required: true }
})

const typeAccountchema = new mongoose.Schema({
  _name: { type: String, required: true },
  _price: { type: String, required: true }
})

const userSchema = new mongoose.Schema({
  _username: { type: String, required: true },
  _email: { type: String, required: true },
  _password: { type: String, required: true }
})

const albumModel = mongoose.model('Album', albumSchema)
const artistModel = mongoose.model('Artist', artistSchema)
const genderModel = mongoose.model('Gender', genderSchema)
const songModel = mongoose.model('Song', songSchema)
const playlistModel = mongoose.model('Playlist', playListSchema)
const tipocuentaModel = mongoose.model('tipocuenta', typeAccountchema)
const userModel = mongoose.model('User', userSchema)

export const models = {
  album: albumModel,
  artist: artistModel,
  gender: genderModel,
  song: songModel,
  playlist: playlistModel,
  tipocuenta: tipocuentaModel,
  user: userModel
}
