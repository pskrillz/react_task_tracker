import Task from './Task'


// this provides the content of the tasks
const Tasks = ({taskList}) => {
   



    return (
        <div>
            {taskList.map( (task) => (
            <Task key={task.id} task={task}/>
            ))}
        </div>
    )
}

export default Tasks
