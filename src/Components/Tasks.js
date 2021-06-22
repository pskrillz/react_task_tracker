


// this provides the content of the tasks
const Tasks = ({taskList}) => {
   



    return (
        <div>
            {taskList.map( (task) => 
            (<h3 key={task.id}>{task.text}</h3>
            ))}
        </div>
    )
}

export default Tasks
