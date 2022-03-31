import React, { Component } from 'react'

export default class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            date: '',
            reminder: false,
        }
    }
        setText = (e) => {console.log(e)}
        setDate = (e) => {console.log(e)}
        setReminder = (e) => {console.log(e)}


  render() {
    return (
      <form>
          <div>
              <label>
                  Task
              </label>
              <input type="text" placeholder="Add Task" value={this.text} onChange={(e) => this.setText(e.target.value)}></input>
          </div>
          <div>
              <label>
                  Date and Time
              </label>
              <input type="text" placeholder="Add Day and Time" value={this.date} onChange={(e) => this.setDate(e.target.value)}></input>
          </div>
          <div>
              <label>
                  Reminder
              </label>
              <input type="checkbox" value={this.reminder} onChange={(e) => this.setReminder(e.currentTarget.checked)}/>
          </div>
          <input type='submit' value='Save Task' />
      </form>
    )
  }
}
