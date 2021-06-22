import './App.css';
import Header from './Components/Header';
import Button from './Components/Button';
import Tasks from './Components/Tasks';
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

  const onClick = () =>{
    console.log("root click")
  }

  return (
    <div className="container">
      <Header></Header>
      {/* No need for this test button
       <Button color="green" text="root click" onClick={onClick}></Button> */}
      <Tasks taskList={tasks}/>
      
    </div>
  );
}

export default App;
