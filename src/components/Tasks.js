import React, { Component } from 'react'
import Task from './Task'
import { FaTimes } from 'react-icons/fa'

export default class Tasks extends Component {
    render() {
        return (
            <>
            {this.props.tasks.map((task) => (
            <Task key={task.id} text={task.text} day={task.day}/>
            ))}
            </>
        )
    }
}

