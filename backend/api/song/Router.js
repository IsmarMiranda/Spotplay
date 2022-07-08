class SongRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/', this.handleGetSong.bind(this))
    this._router.post('/', this.handlePostSong.bind(this))
    this._router.get('/:name', this.handleGetaSong.bind(this))
    this._router.delete('/:id', this.handleDeleteSong.bind(this))
    this._router.put('/:id', this.handlePutSong.bind(this))
  }

  async handleGetSong (req, res) {
    try {
      const result = await this._ctrl.getAllSong()
      this._response.success(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        this._response.success(req, res, 'No hay Canciones', this._httpCode.not_found)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  async handlePostSong (req, res) {
    const result = await this._ctrl.createNewSong(req.body)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handleGetaSong (req, res) {
    const { name } = req.params
    const result = this._ctrl.findSong(name)
    this._response.success(req, res, result, 201)
  }

  async handleDeleteSong (req, res) {
    const { id } = req.params
    console.log(id)
    const result = await this._ctrl.deleteSong(id)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handlePutSong (req, res) {
    const song = req.body
    const { id } = req.params
    const result = await this._ctrl.updateSong(id, song)
    this._response.success(req, res, result, 200)
  }
}

export default SongRouter
