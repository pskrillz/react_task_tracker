
// this provides the content of the tasks
const dumbyTaskList = [
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
]
function Tasks() {
    return (
        <div>
            {dumbyTaskList.map( (task) => 
            (<h3 key={task.id}>{task.text}</h3>
            ))}
        </div>
    )
}

export default Tasks
