import React, { Component } from 'react'
import ListNotes from './components/ListNotes'
import RegistrationForm from './components/RegistrationForm'
import ListCategories from './components/ListCategories'
import './assets/App.css'
import './assets/index.css'

class App extends Component {
  constructor(){
    super()

    this.state = {
      notes: [],
      categories: [],
    }
  }

  addNote(title, text) {
    this.setState({
      notes: [...this.state.notes, { title, text }]
    })
  }

  deleteNote(index){
    let arrayOfNotes = this.state.notes
    arrayOfNotes.splice(index, 1)
    this.setState({
      notes: arrayOfNotes
    })
  }

  addCategory(name){
    this.setState({
      categories: [...this.state.categories, name]
    })
  }

  render () {
    return (
      <section className='content'>
        <RegistrationForm addNote={this.addNote.bind(this)} />
        <main className='main-content'>
          <ListCategories
            categories={this.state.categories}
            addCategory={this.addCategory.bind(this)} />

          <ListNotes
            notes={this.state.notes}
            deleteNote={this.deleteNote.bind(this)} />
        </main>

      </section>
    )
  }
}

export default App
