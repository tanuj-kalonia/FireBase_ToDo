import React from 'react'
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons"

import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { setDay } from 'date-fns';


const TodoForm = ({
    handleSubmit,
    heading = false,
    text, setText,
    day, setDay,
    time, setTime,
    todoProject, setTodoProject,
    projects,
    showButtons = false,
    setShowModal = false
}) => {

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <div className="text">
                    <div className="text">
                        {
                            heading ?
                                <h3>{heading}</h3> : null
                        }
                    </div>
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
                        {
                            projects.length > 0 ?
                                projects.map(project =>
                                    <div
                                        className={`project ${todoProject === project.name ? 'active' : ''}`}
                                        key={project.id}
                                        onClick={() => setTodoProject(project.name)}
                                    >
                                        {project.name}
                                    </div>
                                )
                                :
                                <div className="noProject">
                                    Please add a project before procedding !
                                </div>
                        }
                    </div>
                </div>


                {
                    showButtons &&
                    <div>
                        <div className="cancel">
                            <X size='40' onClick={() => setShowModal(false)} />
                        </div>
                        <div className="confirm">
                            <button>+ Add Task</button>
                        </div>
                    </div>
                }


            </form>
        </MuiPickersUtilsProvider >

    )
}

export default TodoForm 