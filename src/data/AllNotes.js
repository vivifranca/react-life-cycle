export default class AllNotes {
  constructor(){
    this.items = []
    this._registered = []
  }

  addNote(title, text, category){
    const newNote = new Note(title, text, category)
    this.items.push(newNote)
    this.notify()
  }

  deleteNote(index){
    this.items.splice(index, 1)
    this.notify()
  }

  register(func){
    this._registered.push(func)
  }

  unregister(func){
    this._registered = this._registered.filter(f => f !== func)
  }

  notify(){
    this._registered.forEach(func => func(this.items))
  }
}

class Note {
  constructor(title, text, category) {
    this.title = title
    this.text = text
    this.category = category
  }
}