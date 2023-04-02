import React from 'react'
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from 'react-bootstrap-icons'

const Todo = ({ todo }) => {

    const [hover, setHover] = React.useState(false);

    return (
        <div className="Todo">
            <div
                className="todo-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className="check-todo">
                    {
                        todo.checked ?
                            <span className='checked'>
                                <CheckCircleFill color='#bebebe' />
                            </span>
                            :
                            <span className='unchecked'>
                                <Circle color={todo.color} />
                            </span>

                    }
                </div>

                <div className="text">
                    <p
                        style={{ color: todo.checked ? '#bebebe' : '#000' }}
                    >
                        {todo.name}
                    </p>
                    <span>{todo.time} - {todo.project}</span>
                    <div className={`line ${todo.checked ? ' line-through' : ''}`}></div>
                </div>

                <div className="add-to-next-day">
                    {
                        todo.checked &&
                        <span>
                            <ArrowClockwise />
                        </span>
                    }
                </div>

                <div className="delete-todo">
                    {
                        (hover || todo.checked) &&
                        <span>
                            <Trash />
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}


export default Todo


