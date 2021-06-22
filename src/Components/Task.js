

const Task = ({key, task}) => {
    return (
        <div className="task">
            <h3 key={key} task={task}>{task.text}</h3>
        </div>
    )
}

export default Task
