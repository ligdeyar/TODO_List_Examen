import {useState, useEffect} from 'react';
import logo from './logo.png';
import './App.css';

import {ITask} from './Interfaces/ITask'
import TaskForm from './Componentes/TaskForm';
import Panel from './Componentes/Panel';
import Crear from './Componentes/CrearPanel';

function App() {

  const [id, setId] = useState<number>(0)
  const [task, setTask] = useState<ITask>({ "status" : "TODO", "id": 0 })
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [teams, setTeams] = useState<string[]>(["Development", "QA", "PMs", "BI"])
  
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const changeStatus = (id: number, status: string) => {
    const newTaskList = taskList.map( task => {
      if(task.id === id) {
        task.status = status
      }
      return task
    })
    setTaskList(newTaskList)
  }

  const deleteTask = (id: number) => {
    const newTaskList = taskList.filter( task => task.id !== id )
    setTaskList(newTaskList)
  }
  const addTask = () => {   
    
    setTaskList([...taskList, task])
    const newId: number = id + 1
    setId(newId)

    setTask({ 
       "id" : newId
      , "status" : "TODO" 
      , "name" : "" 
      , "team" : "" 
      , "hours" : 0 
    })
  }


  return (
    <div className='App'>
      <img src={logo} alt="Logo.png" width="100" />
      <header>
        <h1>TODO LIST</h1>
      </header>

      

      <div className='container'>
            <TaskForm
              task={task}
              teams={teams}
              onChangeInput={handleInputChange}
              onChangeSelect={handleSelectChange}
              onSave={addTask}
            />

        <Crear/>
        
     
      <div className='columnas'>
            <Panel 
              title={'Tareas Pendientes'}
              tasks={taskList.filter(task => task.status === 'TODO') }
              changeStatus={changeStatus}
              deleteTask={deleteTask}
            />
            <Panel 
              title={'Tareas Progreso'}
              tasks={taskList.filter(task => task.status === 'En Progreso') }
              changeStatus={changeStatus}
              deleteTask={deleteTask}
            />
            <Panel 
              title={'Tareas Completadas'}
              tasks={taskList.filter(task => task.status === 'Completado') }
              changeStatus={changeStatus}
              deleteTask={deleteTask}
            />
    
        </div>
      </div>
    </div>
  );
}

export default App;
