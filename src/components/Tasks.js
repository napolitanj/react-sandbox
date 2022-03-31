import React, { Component } from 'react'
import Task from './Task'

export default class Tasks extends Component {
    render() {
        const {tasks, onDelete, onToggle} = this.props
        return (
            <>
            {tasks.map((task) => (
            <Task key={task.id} text={task.text} day={task.day} id={task.id} reminder={task.reminder} onDelete={onDelete} onToggle={onToggle}/>
            ))}
            </>
        )
    }
}

