class GenderRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/', this.handleGetGender.bind(this))
    this._router.post('/', this.handlePostGender.bind(this))
    this._router.put('/:id', this.handlePutGender.bind(this))
    this._router.delete('/:id', this.handleDeleteGender.bind(this))
  }

  async handlePostGender (req, res) {
    const result = await this._ctrl.createNewGender(req.body)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handleGetGender (req, res) {
    try {
      const result = await this._ctrl.getAllGender()
      this._response.success(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        this._response.success(req, res, 'No hay Generos', this._httpCode.not_found)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  handleGetaGender (req, res) {}

  async handlePutGender (req, res) {
    const album = req.body
    const { id } = req.params
    const result = await this._ctrl.updateGender(id, album)
    this._response.success(req, res, result, 200)
  }

  async handleDeleteGender (req, res) {
    const { id } = req.params
    console.log(id)
    const result = await this._ctrl.deleteGender(id)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }
}

export default GenderRouter
