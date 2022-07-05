class PlaylistRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/', this.handleGetPlaylist.bind(this))
    this._router.post('/', this.handlePostPlaylist.bind(this))
    // this._router.delete('/', this.handleDeleteSong.bind(this))
    // this._router.put('/', this.handlePutSong.bind(this))
  }

  handleGetPlaylist (req, res) {
    try {
      const result = this._ctrl.getAllPlaylist()
      this._response.success(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        this._response.success(req, res, 'No hay listas', this._httpCode.not_found)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  handlePostPlaylist (req, res) {
    const playlist = req.body
    const result = this._ctrl.createNewPlaylist(playlist)
    this._response.success(req, res, result, 200)
  }

  handleDeleteSong (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta delet/song')
  }

  handlePutSong (req, res) {
    console.log(req)
    res.send('soy el manejador de la ruta put/song')
  }
}

export default PlaylistRouter
