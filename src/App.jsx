import './App.css'

import { useState, useEffect } from 'react'
import { TaskCard } from './TaskCard'

const tasks_list = [
]

function App() {
  const [message, setMessage] = useState('')
  // const [updated, setUpdated] = useState(message)
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('tasks');
    if (savedData) {
      setJsonData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  const handleClick_x = () => {
    setMessage('')
  }

  const saveToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks_list))
  }

  const handleClick = () => {
    // setUpdated(message);
    // console.log(message)
    tasks_list.push({
      task: message,
      isDone: false,
      isActive: true}
    )

    saveToLocalStorage()
  };
  
  // const handleClick = () => {
  //   // 👇 "message" stores input field value
  //   setUpdated(message);
  //   console.log(message)
  //   tasks_list.push({
  //     task: message,
  //     isDone: false,
  //     isActive: true}
  //   )
  // };
  
  return (
    <div className="container">

      <div className="container-child">
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
            <button onClick={handleClick}>Add</button>
            <button onClick={handleClick_x}>X</button>
          </div>
          {
            jsonData.map(task_unit => {
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
      </div>
    </div>
  )
}

export default App