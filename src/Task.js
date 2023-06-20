export const Task = (props) => {
    return (
        <div className='task' style={{backgroundColor:props.completed && "green"}}>
              <h1>{props.taskName}</h1>
              <button onClick={() => props.handleCompleted(props.id)}>Complete</button>
              <button onClick={() => props.deleteTask(props.id)}>Delete</button>
        </div>
    )
}