import React, { Component } from 'react'
import { FaTimes } from 'react-icons/fa'


class Task extends Component {
  render() {
    const {text, day, id, onDelete, onToggle} = this.props
    return (
        <div onDoubleClick={() => onToggle(id)}>
          <h3>{text} <FaTimes style={{color:'red',cursor: 'pointer'}} onClick={() => onDelete(id)}/></h3>
          <p>{day}</p>
        </div>
    )
  }
}

export default Task