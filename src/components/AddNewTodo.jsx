import React from 'react'

import Modal from './Modal';
import TodoForm from './TodoForm'
import { TodoContext } from '../context/index'


const AddNewTodo = () => {
    // context
    const { selectedProject } = React.useContext(TodoContext)

    const [showModal, setshowModal] = React.useState(false);
    const [text, setText] = React.useState("");
    const [time, setTime] = React.useState(new Date());
    const [day, setDay] = React.useState(new Date());
    const [todoProject, setTodoProject] = React.useState(selectedProject);

    const projects = [
        { id: 0, name: 'Personal', numOfTodos: 0 },
        { id: 1, name: 'Work', numOfTodos: 1 },
        { id: 2, name: 'Study', numOfTodos: 2 },
    ]

    function handleSubmit(e) {
        console.log("clicked");
    }

    React.useEffect(() => {
        setTodoProject(selectedProject);
    }, [selectedProject]);

    return (
        <div className='AddNewTodo'>

            <div className="btn">
                <button onClick={() => setshowModal(true)}>+ New Todo</button>
            </div>

            <Modal showModel={showModal} setShowModel={setshowModal}>
                <TodoForm
                    handleSubmit={handleSubmit}
                    heading='Add New to do'
                    text={text}
                    setText={setText}
                    day={day}
                    setDay={setDay}
                    time={time}
                    setTime={setTime}
                    todoProject={todoProject}
                    setTodoProject={setTodoProject}
                    projects={projects}
                    showButtons={true}
                    setShowModal={setshowModal}
                />
            </Modal>
        </div>
    )
}

export default AddNewTodo 