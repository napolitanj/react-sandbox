import React, { Component } from 'react'

export default class Tasks extends Component {
    objectWithArray = {
    tasks: [
        {
            id:1,
            text: 'Doctors Apt',
            day: 'Feb 5',
            reminder:true,
        },
        {
            id:2,
            text: 'Meeting',
            day: 'Feb 7',
            reminder:true,
        },
        {
            id:3,
            text: 'Eat food',
            day: 'Feb 24',
            reminder:false,
        }
    ]
}
  render() {
    return (
      <>
      {this.objectWithArray.tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
      </>
    )
  }
}

