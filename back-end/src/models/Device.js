class Device {
    constructor (id, category, color, partNumber) {
      this._id = id
      this._category = category
      this._color = color
      this._partNumber = partNumber
    }
  
    getId() {
        return this._id
      }
    
    setId(id) {
    this._id = id
    }
  
    getCategory() {
      return this._category
    }
  
    setCategory(category) {
      this._category = category
    }
  
    getColor() {
      return this._color
    }
  
    setColor(color) {
      this._color = color
    }
  
    getPartNumber() {
      return this._partNumber
    }
  
    setPartNumber(partNumber) {
      this._partNumber = partNumber
    }
  }
  
  module.exports = Device