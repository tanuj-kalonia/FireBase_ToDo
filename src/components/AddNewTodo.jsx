import React from 'react'
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons"

import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Modal from './Modal';
import TodoForm from './TodoForm'
import { setDay, setQuarter } from 'date-fns';


const AddNewTodo = () => {

    const [showModal, setshowModal] = React.useState(false);
    const [text, setText] = React.useState("");
    const [time, setTime] = React.useState(new Date());
    const [day, setDay] = React.useState(new Date());

    const projects = [
        { id: 0, name: 'Personal', numOfTodos: 0 },
        { id: 1, name: 'Work', numOfTodos: 1 },
        { id: 2, name: 'Study', numOfTodos: 2 },
    ]

    function handleSubmit(e) {
        console.log("clicked");
    }
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
                    projects={projects}
                    showButtons={true}
                    setShowModal={setshowModal}
                />
            </Modal>
        </div>
    )
}

export default AddNewTodo 