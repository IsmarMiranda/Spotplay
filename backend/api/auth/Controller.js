export default class AuthController {
  constructor (services, entity, comparePassword, generateToken) {
    this._services = services
    this._entity = entity
    this._comparePassword = comparePassword
    this._generateToken = generateToken
  }
  // Metodo que se encargara del login, verificar si existe ese username, si existe comparamos las passwords y si coincide, generamos un token

  autenticationUser (user) {
    try {
      const result = this._services.findByAtribute('user', '_username', user.username)
      if (result != null) {
        const resultComparePassword = this._comparePassword(user.password, result._password)
        if (resultComparePassword) {
          const tokenUser = this._generateToken(result._id)
          return new this._entity({
            state: true,
            username: result._username,
            email: result._email,
            token: tokenUser,
            message: 'login successful'
          })
        } else {
          return new this._entity({
            state: false,
            username: '',
            email: '',
            token: '',
            message: 'Sus credenciales son incorrectas'
          })
        }
      } else {
        return new this._entity({
          state: false,
          username: '',
          email: '',
          token: '',
          message: 'Sus credenciales son incorrectas'
        })
      }
    } catch (error) {
      return new Error(error)
    }
  }
}
