import React from 'react'
import AddNewTodo from './AddNewTodo'
import Projects from './Projects'
import User from './User'
import Calender from './Calender'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <User />
            <AddNewTodo />
            <Calender />
            <Projects />
        </div>
    )
}

export default Sidebar