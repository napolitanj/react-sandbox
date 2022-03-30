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
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={taskList}/>
    </div>
  )
}

export default App