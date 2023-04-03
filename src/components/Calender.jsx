import React from 'react'
import { CalendarDate, CaretUp } from 'react-bootstrap-icons';
import { TodoContext } from '../context';

const Calender = () => {
    // context
    const { setSelectedProject } = React.useContext(TodoContext);

    const calendarItems = ['Today', 'Next 7 Days', 'All Task']
    return (
        <div className='Calender'>
            <div className="header">
                <div className="title">
                    <CalendarDate />
                    <p>Calendar</p>
                </div>
                <div className="btns">
                    <span className='tag-btn'>
                        <CaretUp size={'20'} />
                    </span>
                </div>
            </div>

            <div className="items">{
                calendarItems.map((item, index) =>
                    <div
                        className="item"
                        onClick={() => setSelectedProject(item)}
                        key={index}
                    >
                        {item}
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Calender