import React, { Component } from 'react'
import './style.css'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)

    this.title = ''
    this.text = ''
    this.category = 'Undefined Category'
    this.state = { categories: this.props.categories.items }
    this._newCategories = this._newCategories.bind(this)
  }

  componentDidMount(){
    this.props.categories.register(this._newCategories)
  }

  componentWillUnmount(){
    this.props.categories.unregister(this._newCategories)
  }

  _newCategories(categories){
    this.setState({ ...this.state, categories})
  }

  _handleChangeTitle(event) {
    event.stopPropagation()

    this.title = event.target.value
  }

  _handleChangeText(event) {
    event.stopPropagation()

    this.text = event.target.value
  }

  _handleChangeCategory(event) {
    event.stopPropagation()

    this.category = event.target.value
  }

  _handleSubmit(event) {
    event.preventDefault()
    event.stopPropagation()

    this.props.addNote(this.title, this.text, this.category)
  }

  render() {
    return (
      <form className='registration-form' onSubmit={this._handleSubmit.bind(this)}>
        <select className='registration-form_input' onChange={this._handleChangeCategory.bind(this)}>
          <option>Undefined Category</option>
          {this.state.categories.map((category, index) => {
            return <option key={index}>{category}</option>
          })}
        </select>
        <input
          type='text'
          placeholder='Title'
          className='registration-form_input'
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder='Your note...'
          className='registration-form_input'
          onChange={this._handleChangeText.bind(this)}
        />
        <button className='registration-form_input registration-form_submit'>
          Add Note
        </button>
      </form>
    )
  }
}

export default RegistrationForm
