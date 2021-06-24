import Task from './Task'


// this provides the content of the tasks
const Tasks = ({taskList, onDelete}) => {
   



    return (
        <div>
            {taskList.map( (task) => (
            <Task key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Tasks
