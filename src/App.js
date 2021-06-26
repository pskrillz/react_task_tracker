import './App.css';
import Header from './Components/Header';
import Button from './Components/Button';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import { useState } from "react"

function App() {
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


  return (
    <div className="container">
      <Header></Header>
      <AddTask></AddTask>
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
