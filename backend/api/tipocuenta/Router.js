class TipoCuentaRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/', this.handleGetAccount.bind(this))
    this._router.post('/', this.handlePostAccount.bind(this))
    this._router.get('/:name', this.handleGetAccount.bind(this))
    this._router.delete('/:id', this.handleDeleteAccount.bind(this))
    this._router.put('/:id', this.handlePutAccount.bind(this))
  }

  async handleGetAccount (req, res) {
    try {
      const result = await this._ctrl.getAllAccount()
      this._response.success(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        this._response.success(req, res, 'No hay Cuentas', this._httpCode.not_found)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  async handlePostAccount (req, res) {
    const result = await this._ctrl.createNewAccount(req.body)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handleGetaAccountg (req, res) {
    const { name } = req.params
    const result = this._ctrl.findAccount(name)
    this._response.success(req, res, result, 201)
  }

  async handleDeleteAccount (req, res) {
    const { id } = req.params
    console.log(id)
    const result = await this._ctrl.deleteAccount(id)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handlePutAccount (req, res) {
    const song = req.body
    const { id } = req.params
    const result = await this._ctrl.updateAccount(id, song)
    this._response.success(req, res, result, 200)
  }
}

export default TipoCuentaRouter
