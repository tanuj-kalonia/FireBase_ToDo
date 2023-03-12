import React from 'react'
import EditTodo from './EditTodo'

import Next7Days from './Next7Days'
import Todos from './Todos'

const Main = () => {
    return (
        <div className='Main'>
            <Todos />
            <Next7Days />
            <EditTodo />
        </div>
    )
}

export default Main