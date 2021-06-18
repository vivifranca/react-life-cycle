export default class Categories {
  constructor() {
    this.items = ['Work', 'Study']
    this._registered = []
  }

  register(func){
    this._registered.push(func)
  }

  unregister(func){
    console.log(this._registered.length)
    this._registered = this._registered.filter(f => f !== func)
    console.log(this._registered.length)
  }

  notify(){
    this._registered.forEach(func => func(this.items))
  }

  addCategory(newCategory){
    this.items.push(newCategory)
    this.notify()
  }
}