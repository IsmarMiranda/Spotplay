import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

// Configuracion de paths | raiz de donde esta alojado nuestro proyecto
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
// importacion de modulos
import { userModule } from './user/index.js'
import { songMudule } from './song/index.js'
import { tipoCuentaModule } from './tipocuenta/index.js'
import { artistModule } from './artist/index.js'
import { genderModule } from './gender/index.js'
import { albumModule } from './album/index.js'
import { playlistModule } from './playlist/index.js'
import { authModule } from './auth/index.js'
// esta clase crea el servidor
class Server {
  constructor (config) {
    this._app = express() // almacena la instancia de express
    this._port = config.port // almacena el puerto del servidor
    this._hostname = config.hostname // almacena el hostname del servidor
    this._name = config.name // almacena el nombre del servidor
    this._dirname = dirname(fileURLToPath(import.meta.url)) // almacena el directorio del servidor
    this._swaggerFile = YAML.load(join(dirname(fileURLToPath(import.meta.url)), '../docs/swagger.yaml'))
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
    this._app.use('/api/v1/playlist', playlistModule())
    this._app.use('/api/v1/user', userModule(express.Router))
    this._app.use('/api/v1/auth', authModule(express.Router))
    this._app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(this._swaggerFile))
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
