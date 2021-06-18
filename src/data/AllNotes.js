export default class AllNotes {
  constructor(){
    this.items = []
    this._registered = []
  }

  addNote(title, text, category){
    const newNote = new Note(title, text, category)
    this.items.push(newNote)
  }

  deleteNote(index){
    this.items.splice(index, 1)
  }

  register(func){
    this._registered.push(func)
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