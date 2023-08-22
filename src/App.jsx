import './App.css'
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
  },
]

function App() {
  return (
    <section className='App'>
      {
        tasks_list.map(task_unit => {
          const { task, isDone, isActive } = task_unit
          return (
            <TaskCard 
              key= {task}
              task= {task}
              isDone= {isDone}
              isActive= {isActive}
              />
            )
        } )
      }
    </section>
  )
}

export default App