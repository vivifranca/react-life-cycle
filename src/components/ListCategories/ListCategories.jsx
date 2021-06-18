import React, { Component } from 'react'
import './style.css'

class ListCategories extends Component {
  constructor(props){
    super(props)
    this.state = { categories: this.props.categories.items }

    this._newCategories = this._newCategories.bind(this)
  }
  componentDidMount(){
    this.props.categories.register(this._newCategories.bind(this))
  }

  componentWillUnmount(){
    this.props.categories.unregister(this._newCategories)
  }

  _newCategories(categories){
    this.setState({ ...this.state, categories })
  }

  _handleInputEvent(e) {
    if (e.key === 'Enter') {
      this.props.addCategory(e.target.value)
    }
  }

  render() {
    return (
      <section className='list-categories'>
        <ul className='list-categories_list'>
          {this.state.categories.map((category, index) => {
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