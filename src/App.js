import React, { Component } from 'react'
import ListNotes from './components/ListNotes'
import RegistrationForm from './components/RegistrationForm'
import ListCategories from './components/ListCategories'
import './assets/App.css'
import './assets/index.css'
import Categories from './data/Categories'
import AllNotes from './data/AllNotes'

class App extends Component {
  constructor(){
    super()

    this.categories = new Categories()
    this.notes = new AllNotes()
  }

  render () {
    return (
      <section className='content'>
        <RegistrationForm
          addNote={this.notes.addNote.bind(this.notes)}
          categories={this.categories.items} />
        <main className='main-content'>
          <ListCategories
            categories={this.categories.items}
            addCategory={this.categories.addCategory.bind(this.categories)} />

          <ListNotes
            notes={this.notes.items}
            deleteNote={this.notes.deleteNote.bind(this.notes)} />
        </main>

      </section>
    )
  }
}

export default App
