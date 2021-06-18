export default class Categories {
  constructor() {
    this.items = ['Work', 'Study']
    this._registered = []
  }

  register(func){
    this._registered.push(func)
  }

  notify(){
    this._registered.forEach(func => func(this.items))
  }

  addCategory(newCategory){
    this.items.push(newCategory)
  }
}