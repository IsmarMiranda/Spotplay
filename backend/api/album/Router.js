class ArtistRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/', this.handleGetAlbum.bind(this))
    this._router.post('/', this.handlePostAlbum.bind(this))
    this._router.put('/:id', this.handlePutAlbum.bind(this))
    this._router.delete('/:id', this.handleDeleteAlbum.bind(this))
  }

  async handleGetAlbum (req, res) {
    try {
      const result = await this._ctrl.getAllAlbum()
      this._response.success(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        this._response.success(req, res, 'No hay Albumes', this._httpCode.not_found)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  async handlePostAlbum (req, res) {
    const result = await this._ctrl.createNewAlbum(req.body)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handleGetaSong (req, res) {}

  async handlePutAlbum (req, res) {
    const album = req.body
    const { id } = req.params
    const result = await this._ctrl.updateAlbum(id, album)
    this._response.success(req, res, result, 200)
  }

  async handleDeleteAlbum (req, res) {
    const { id } = req.params
    console.log(id)
    const result = await this._ctrl.deleteAlbum(id)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }
}
export default ArtistRouter
