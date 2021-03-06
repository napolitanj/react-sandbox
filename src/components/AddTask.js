import React, { Component } from 'react'

export default class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            day: '',
            reminder: false,
        }
    }


  render() {
    const {submitTask} = this.props;

    const onSubmitFunction = (e) => {
        e.preventDefault()

        if(this.state.text === '') {
            alert('Please add text')
            return
        }
        
        submitTask(this.state)

        this.setState({text:''})
        this.setState({day:''})
        this.setState({reminder:false})
    }

    return (
      <form onSubmit={onSubmitFunction}>
          <div>
              <label>
                  Task
              </label>
              <input type="text" placeholder="Add Task" value={this.state.text} onChange={(e) => this.setState({text:e.target.value})}></input>
          </div>
          <div>
              <label>
                  day and Time
              </label>
              <input type="text" placeholder="Add Day and Time" value={this.state.day} onChange={(e) => this.setState({day:e.target.value})}></input>
          </div>
          <div>
              <label>
                  Reminder
              </label>
              <input type="checkbox" checked={this.reminder} value={this.state.reminder} onChange={(e) => this.setState({reminder:e.currentTarget.checked})}/>
          </div>
          <input type='submit' value='Save Task' />
      </form>
    )
  }
}
