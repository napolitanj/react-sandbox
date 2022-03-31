import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [taskList, functionToSetTasks] = useState([
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
  ])

//Delete Tasks
const deleteTask = (id) => {
  functionToSetTasks(taskList.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  console.log(id)
}

  return (
    <div className='container'>
      <Header />
      {taskList.length >0 ? 
      <Tasks tasks={taskList} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
    </div>
  )
}

export default App