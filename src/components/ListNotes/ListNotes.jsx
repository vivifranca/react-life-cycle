import React, { Component } from 'react'
import NoteCard from '../NoteCard'
import './style.css'

class ListNotes extends Component {
  constructor(props){
    super(props)
    this.state = { notes: this.props.notes.items }

    this._newNotes = this._newNotes.bind(this)
  }
  componentDidMount(){
    this.props.notes.register(this._newNotes.bind(this))
  }
  componentWillUnmount(){
    this.props.notes.unregister(this._newNotes)
  }
  _newNotes(notes){
    this.setState({ ...this.state, notes })
  }
  render() {
    return (
      <ul className='list-notes'>
        {this.state.notes.map((note, index) => {
          return (
            <li className='list-notes_item' key={index}>
              <NoteCard
                index={index}
                deleteNote={this.props.deleteNote}
                title={note.title}
                text={note.text}
                category={note.category}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ListNotes