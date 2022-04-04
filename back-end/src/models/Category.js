class Category {
    constructor (id, name) {
      this._id = id
      this._name = name
    }
  
    getId() {
      return this._id
    }
  
    setId(id) {
      this._id = id
    }
  
    getName() {
      return this._name
    }
  
    setName(name) {
      this._name = name
    }
  
  }
  
  module.exports = Category