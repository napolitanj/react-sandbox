import React, { Component } from 'react'
import { FaTimes } from 'react-icons/fa'


class Task extends Component {
  render() {
    return (
        <div>
          <h3>{this.props.text} <FaTimes /></h3>
          <p>{this.props.day}</p>
        </div>
    )
  }
}

export default Task