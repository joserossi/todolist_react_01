import './App.css'

import { useState } from 'react'
import { TaskCard } from './TaskCard'

const tasks_list = [
  {
    task: 'Tarea 1',
    isDone: true,
    isActive: true
  },
  {
    task: 'Tarea 2',
    isDone: false,
    isActive: true
  },
  {
    task: 'Tarea 3',
    isDone: true,
    isActive: true
  }
]

function App() {
  const [message, setMessage] = useState('')
  const [updated, setUpdated] = useState(message)

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(message);
    console.log(message)
    tasks_list.push({
      task: message,
      isDone: false,
      isActive: true}
    )
  };
  return (
    <section className='App'>
      <div className='add-text'>
        <input 
          type="text" 
          id='message'
          name='message'
          className='input-field'
          onChange={handleChange}
          value={message}
        />
        <button onClick={handleClick}>Agregar</button>
      </div>
      {
        tasks_list.map(task_unit => {
          const { task, isDone, isActive } = task_unit
          return (
            <>

            <div>
              <TaskCard 
                key= {task}
                task= {task}
                isDone= {isDone}
                isActive= {isActive}
                />
            </div>
            </>
            )
        } )
      }
    </section>
  )
}

export default App