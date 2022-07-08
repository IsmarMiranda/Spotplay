export default class UserRouter {
  constructor (router, controller, response, httpCode, createUserValidation) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this._chekUser = createUserValidation
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/singup', this._chekUser, this.handleSingUp.bind(this))
    this._router.get('/', this.handleGetUsers.bind(this))
    this._router.delete('/:id', this.handleDeletUser.bind(this))
    this._router.put('/', this.handlePutUser.bind(this))
  }

  async handleSingUp (req, res) {
    const result = await this._ctrl.createNewUser(req.body)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handleGetUsers (req, res) {
    try {
      const result = await this._ctrl.getAllUsers()
      this._response.success(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        this._response.success(req, res, 'No hay canciones', this._httpCode.not_found)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  async handleDeletUser (req, res) {
    const { id } = req.params
    console.log(id)
    const result = await this._ctrl.deleteUser(id)
    if (result instanceof Error) {
      this._response.error(req, res, result, 201)
    }
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handlePutUser (req, res) {
    try {
      const result = await this._ctrl.updateUser()
      this._response.success(req, res, result, this._httpCode.ok)
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }
}
