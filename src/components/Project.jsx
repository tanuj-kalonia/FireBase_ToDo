import React from 'react'
import { Pencil, XCircle } from 'react-bootstrap-icons'

const Project = ({ project, edit }) => {
    return (
        <div className="Project">
            <div className="name">
                {project.name}
            </div>

            <div className="btns">
                {
                    edit ?
                        <div className="edit-delete">
                            <span className='edit tag-btn'>
                                <Pencil size={'13'} />
                            </span>
                            <span className='delete tag-btn'>
                                <XCircle size={'13'} />
                            </span>
                        </div>

                        :

                        project.numOfTodos == 0 ?
                            " " :
                            <div className="total-todos">
                                {project.numOfTodos}
                            </div>
                }
            </div>


        </div>
    )
}

export default Project