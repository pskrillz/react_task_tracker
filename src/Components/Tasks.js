import Task from './Task'


// this provides the content of the tasks
const Tasks = ({taskList, onDelete, onToggle}) => {
   



    return (
        <div>
            {taskList.map( (task) => (
            <Task key={task.id} 
            task={task} 
            onDelete={onDelete}
            onToggle={onToggle}
            />
            ))}
        </div>
    )
}

export default Tasks
