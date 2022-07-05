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
    // this._router.delete('/', this.handleDeleteSong.bind(this))
    // this._router.put('/', this.handlePutSong.bind(this))
  }

  handleGetGender (req, res) {
    try {
      const result = this._ctrl.getAllGender()
      this._response.success(req, res, result, this._httpCode.ok)
      if (result.length === 0) {
        this._response.success(req, res, 'No hay generos', this._httpCode.not_found)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  handlePostGender (req, res) {
    const artist = req.body
    const result = this._ctrl.createNewGender(artist)
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

export default GenderRouter