import mongoose from 'mongoose'
import { models } from './spotplay-schema.js'
import { config } from '../config/defaults.js'

const mongodb = async () => {
  try {
    const db = await mongoose.connect(config.dbMongo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB connected: ${db.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

export class DBMongo {
  constructor () {
    mongodb()
    this._models = models
  }

  async insertData (collection, data) {
    const newData = this._models[collection](data)
    await newData.save()
    return newData
  }

  async allData (table) {
    const result = await this._models[table].find()
    return result
  }

  async deleteItem (collection, id) {
    const result = await this._models[collection].findByIdAndDelete(id)
    return result
  }

  async updateItem (collection, id, data) {
    const res = await this._models[collection].findByIdAndUpdate(id, data)
    return res
  }
}

// const data = new DBMongo()
// data.insertData('gender', { _name: 'Salsa' }).then(result => { console.log(result) }, error => { console.log(error) })
// data.allData('gender').then(result => { console.log(result) }, error => { console.log(error) })
// data.updateItem('user', '62c75c504a7c40a8257c44d3', { _username: 'Actualizacion' }).then(result => { console.log(result) }, error => { console.log(error) })
