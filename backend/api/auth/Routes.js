export default class AuthRoute {
  constructor (router, controller, response, httpCode) {
    this._router = router()
    this._controller = controller
    this._response = response
    this._hhtpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/singin', this.handleSingin.bind(this))
  }

  handleSingin (req, res) {
    try {
      const result = this._controller.autenticationUser(req.body)
      if (result.auth) {
        this._response.success(req, res, result, this._hhtpCode.Ok)
      } else {
        this._response.success(req, res, result, this._hhtpCode.BAD_REQUEST)
      }
    } catch (error) {
      this._response.error(req, res, error, this._hhtpCode.INTERNAL_SERVER_ERROR)
    }
  }
}
