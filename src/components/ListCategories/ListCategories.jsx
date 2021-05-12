import React, { Component } from 'react'
import './style.css'

class ListCategories extends Component {
  _handleInputEvent(e) {
    if (e.key === 'Enter') {
      this.props.addCategory(e.target.value)
    }
  }

  render() {
    return (
      <section className='list-categories'>
        <ul className='list-categories_list'>
          {this.props.categories.map((category, index) => {
            return (
              <li key={index} className='list-categories_item'>
                {category}
              </li>
            )
          })}
        </ul>

        <input
          type='text'
          className='list-categories_input'
          placeholder='Add category'
          onKeyUp={this._handleInputEvent.bind(this)}
        />
      </section>
    )
  }
}

export default ListCategories