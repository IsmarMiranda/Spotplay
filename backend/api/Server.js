import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
// importacion de modulos
import { userModule } from './user/index.js'
import { songMudule } from './song/index.js'
import { tipoCuentaModule } from './tipocuenta/index.js'
import { artistModule } from './artist/index.js'
import { genderModule } from './gender/index.js'
import { albumModule } from './album/index.js'
// esta clase crea el servidor
class Server {
  constructor (config) {
    this._app = express() // almacena la instancia de express
    this._port = config.port // almacena el puerto del servidor
    this._hostname = config.hostname // almacena el hostname del servidor
    this._name = config.name // almacena el nombre del servidor
    this.setMiddlewares()
    this.setRoutes()
  }

  setMiddlewares () {
    this._app.use(express.json())
    this._app.use(express.urlencoded({ extended: true }))
    this._app.use(cors())
    this._app.use(morgan('dev'))
  }

  setRoutes () {
    this._app.use('/api/v1/song', songMudule())
    this._app.use('/api/v1/tipocuenta', tipoCuentaModule())
    this._app.use('/api/v1/artist', artistModule())
    this._app.use('/api/v1/album', albumModule())
    this._app.use('/api/v1/gender', genderModule())
    this._app.use('/api/v1/user', userModule(express.Router))
  }

  // este metodo inicia el servidor
  start () {
    this._app.set('hostname', this._hostname)
    this._app.listen(this._port, () => {
      console.log(`${this._name} is running on http://${this._hostname}:${this._port}`)
    })
  }
}
export default Server
