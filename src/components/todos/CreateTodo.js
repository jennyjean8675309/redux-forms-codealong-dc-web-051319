import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <p>
            <label>Add Todo</label>
            <input type='text' onChange={this.handleChange} value={this.state.text} ></input>
          </p>
          <input type='submit'></input>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
