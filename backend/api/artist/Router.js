class ArtistRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/', this.handleGetArtist.bind(this))
    this._router.post('/', this.handlePostArtist.bind(this))
    this._router.put('/:id', this.handlePutArtist.bind(this))
    this._router.delete('/:id', this.handleDeleteArtist.bind(this))
  }

  async handlePostArtist (req, res) {
    const result = await this._ctrl.createNewArtist(req.body)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handleGetArtist (req, res) {
    try {
      const result = await this._ctrl.getAllArtist()
      this._response.success(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        this._response.success(req, res, 'No hay Artistas', this._httpCode.not_found)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  handleGetaArtist (req, res) {}

  async handlePutArtist (req, res) {
    const album = req.body
    const { id } = req.params
    const result = await this._ctrl.updateArtist(id, album)
    this._response.success(req, res, result, 200)
  }

  async handleDeleteArtist (req, res) {
    const { id } = req.params
    console.log(id)
    const result = await this._ctrl.deleteArtist(id)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }
}

export default ArtistRouter
