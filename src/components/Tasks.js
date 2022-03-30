import React, { Component } from 'react'

export default class Tasks extends Component {
    render() {
        return (
            <>
            {this.props.tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
            </>
        )
    }
}

