import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: "Doctor Appointment", 
        day: "March 6th, 2020 at 12:00pm",
        reminder: true
    },
    {
        id: 2, 
        text: "Meeting at School",
        day: 'February 8th, 2020 at 11:00am',
        reminder: false
    },
    {   
        id: 3, 
        text: "Big Exam",
        day: "April 11th, 2020 at 06:00pm",
        reminder: true
    }
])

  const deleteTask = (id) =>{
    setTasks(tasks.filter( (task) => task.id !== id )    )
  }

  const toggleReminders = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task 
    ))
  }

  const addTask = (task) => {
    // no backend, simple way to simulate id generation. 
    const id = Math.floor(Math.random() * 1000)
    const newTask = {id, ...task};

    setTasks([...tasks, newTask])

    console.log(id, task)
  }


  return (
    <div className="container">
      {/* cool way to create a one line toggle function */}
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      
      showAdd={showAddTask}
      />
      {/* && syntax binary shorthand if statement, 'if true then this' */}
      {showAddTask &&
       <AddTask onAdd={addTask}/>
      }
      {tasks.length > 0 ? 
        (
        <Tasks taskList={tasks} 
        onDelete={deleteTask}   
        onToggle={toggleReminders}/>
        ) : ( 
        "Nothing to Show"
        )}
      
    </div>
  );
}

export default App;
