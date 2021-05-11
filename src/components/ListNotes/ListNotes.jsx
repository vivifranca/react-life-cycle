import React, { Component } from 'react'
import NoteCard from '../NoteCard'
import './style.css'

class ListNotes extends Component {
  render() {
    return (
      <ul className='list-notes'>
        {this.props.notes.map((note, index) => {
          return (
            <li className='list-notes_item' key={index}>
              <NoteCard
                title={note.title}
                text={note.text}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ListNotes