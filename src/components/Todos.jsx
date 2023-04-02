import React from 'react'
import Todo from './Todo'
import Next7Days from './Next7Days';

const Todos = () => {
    const selectedProject = 'today';

    const todos = [
        {
            id: 'asfsf34fas',
            name: 'DO this',
            time: '09',
            data: "12312",
            day: '1',
            checked: true,
            color: '$34rft5',
            project: 'work'

        },
        {
            id: 'asfsffas',
            name: 'HEllo word this',
            time: '09',
            data: "12312",
            day: '6',
            checked: false,
            color: '$34rfd5',
            project: 'work'

        }
    ]
    return (
        <div className="Todos">
            <div className="selected-project">
                {selectedProject}
            </div>

            <div className="todos">
                {
                    selectedProject === 'Next 7 days' ?
                        <Next7Days todos={todos} />
                        :
                        todos.map(todo => (
                            <Todo todo={todo} key={todo.id} />
                        ))
                }
            </div>
        </div>
    )
}

export default Todos;