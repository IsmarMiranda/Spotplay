import fs from 'fs'
export class DataJson {
  constructor () {
    this._dataPath = './store/db.json'
    this.setTables()
  }

  setTables () {
    const tables = {
      user: [],
      song: [],
      playlist: []
    }
    const items = this.readJsonFile()
    if (items.length === 0) {
      this.writeJsonFile(tables)
    }
  }

  readJsonFile () {
    const contentFile = fs.readFileSync(this._dataPath, 'utf8')
    if (contentFile) {
      return JSON.parse(contentFile)
    }
    return []
  }

  writeJsonFile (data) {
    const jsonData = JSON.stringify(data, null, '')
    fs.writeFileSync(this._dataPath, jsonData)
  }

  generatePk (table) {
    const lastItem = this.all(table).pop()
    if (lastItem) {
      return ++lastItem._id
    }
    return 1
  }

  save (table, data) {
    const items = this.readJsonFile()
    data._id = this.generatePk(table)
    items[table].push(data)
    this.writeJsonFile(items)
    return 'Create New Item'
  }

  all (table) {
    const items = this.readJsonFile()
    return items[table] || []
  }

  // para obtener mas resultados debemos usar en vez de find. flicter
  // Creamos metodo para obtener un registro por un atributo, metodo generico que se encargue de buscar campos o items por atributos
  findByAtribute (table, atribute, value) {
    const items = this.readJsonFile()
    const item = items[table].find(item => item[atribute] === value)
    if (item) {
      return item
    }
    return null
  }

  update (table, data) {
    const items = this.readJsonFile()
    const newItems = items[table].filter(item => item._id !== data._id)
    newItems.push(data)
    items[table] = newItems
    this.writeJsonFile(items)
    return data
  }
}

// const data = new DataJson()
// data.save('user', { id: null, name: 'Juan', lastName: 'perez' })
// data.save('song', { id: null, name: 'La canción', artist: 'Pablo' })
// const response = data.all('user')
// const response2 = data.all('song')
// console.table(response)
// console.table(response2)

// const test = new DataJson()
// const result = test.findByAtribute('song', '_title', 'Minutos')
// console.table(result)
// const data = new DataJson()
// const result = data.delete('song', 1)
// console.table(result)
