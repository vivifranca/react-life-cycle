import React, { Component } from 'react'
import ListNotes from './components/ListNotes'
import RegistrationForm from './components/RegistrationForm'
import './assets/App.css'
import './assets/index.css'

class App extends Component {
  constructor(){
    super()

    this.state = {
      notes: []
    }
  }

  addNote(title, text) {
    this.setState({
      notes: [...this.state.notes, { title, text }]
    })
  }

  render () {
    return (
      <section className='content'>
        <RegistrationForm addNote={this.addNote.bind(this)}/>
        <ListNotes notes={this.state.notes}/>
      </section>
    )
  }
}

export default App
