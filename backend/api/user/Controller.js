// los controller se encargar de realizar la logica del negocio
class UserController {
  constructor (serviceUser, user, hashPassword) {
    this._service = serviceUser
    this._entity = user
    this._hashPassword = hashPassword
  }

  async createNewUser (user) {
    if (user.username && user.email && user.password) {
      const newUser = new this._entity(user)
      console.log(newUser)
      newUser.encryptPassword(user.password, this._hashPassword)
      console.log(newUser)
      const response = this._service.insertData('user', newUser)
      return response
    } else {
      throw new Error('Missing parameters')
    }
  }

  async getAllUsers () {
    const response = await this._service.allData('user')
    return response
  }

  async updateUser (id, user) {
    const response = await this._service.updateItem('user', id, user)
    return response
  }

  async deleteUser (id) {
    const response = await this._service.deleteItem('user', id)
    return response
  }
}

export default UserController
