import React from 'react'
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons"

import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Modal from './Modal';
import { setDay } from 'date-fns';


const AddNewTodo = () => {

    const [showModal, setshowModal] = React.useState(false);
    const [text, setText] = React.useState("");
    const [time, setTime] = React.useState(new Date());
    const [day, setDay] = React.useState(new Date());

    return (
        <div className='AddNewTodo'>

            <div className="btn">
                <button onClick={() => setshowModal(true)}>+ New Todo</button>
            </div>

            <Modal showModel={showModal} setShowModel={setshowModal}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <form action="">
                        <div className="text">
                            {/* adds a new task here  */}
                            <h3>Add a task...</h3>
                            <input
                                type="text"
                                id='input-task'
                                className='input-task'
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Add your task here"
                            />
                        </div>
                        <div className="remind">
                            <Bell />
                            <p>Remind Me</p>
                        </div>
                        {/* date picker */}
                        <div className="pick-day">
                            <div className="title">
                                <CalendarDay />
                                <p>Choose a Day</p>
                            </div>
                            <DatePicker
                                value={day}
                                onChange={(day) => setDay(day)}
                            />
                        </div>
                        {/* Time picker/ */}
                        <div className="pick-time">
                            <div className="title">
                                <Clock />
                                <p>Choose time</p>
                            </div>
                            <TimePicker
                                value={time}
                                onChange={time => setTime(time)}
                            />
                        </div>

                        {/* project picker */}
                        <div className="pick-project">
                            <div className="title">
                                <Palette />
                                <p>Choose you project</p>
                            </div>
                            <div className="projects">
                                <div className="project active">
                                    Personal
                                </div>
                                <div className="project">
                                    Work
                                </div>
                                <div className="project">
                                    Study
                                </div>
                            </div>
                        </div>

                        <div className="cancel">
                            <X size='40' onClick={() => setshowModal(false)} />
                        </div>
                        <div className="confirm">
                            <button>+ Add Task</button>
                        </div>
                    </form>
                </MuiPickersUtilsProvider>
            </Modal>
        </div>
    )
}

export default AddNewTodo 