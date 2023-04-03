import React from 'react'
import TodoForm from './TodoForm';

const EditTodo = () => {

    const [text, setText] = React.useState("");
    const [time, setTime] = React.useState(new Date());
    const [day, setDay] = React.useState(new Date());
    const [todoProject, setTodoProject] = React.useState();

    const projects = [
        { id: 0, name: 'Personal', numOfTodos: 0 },
        { id: 1, name: 'Work', numOfTodos: 1 },
        { id: 2, name: 'Study', numOfTodos: 2 },
    ]

    function handleSubmit(e) {
        console.log("clicked");
    }

    return (
        <div className="EditTodo">
            <div className="header">
                Edit Todo
            </div>
            <div className="container">
                <TodoForm
                    handleSubmit={handleSubmit}
                    text={text}
                    setText={setText}
                    day={day}
                    setDay={setDay}
                    time={time}
                    setTime={setTime}
                    todoProject={todoProject}
                    setTodoProject={setTodoProject}
                    projects={projects}
                />
            </div>
        </div>
    )
}

export default EditTodo