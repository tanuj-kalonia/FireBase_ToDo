import React from 'react'
import Modal from './Modal';
import RenameProject from './RenameProject';
import { Pencil, XCircle } from 'react-bootstrap-icons'


const Project = ({ project, edit }) => {
    const [showModel, setshowModel] = React.useState(false)
    return (
        <div className="Project">
            <div className="name">
                {project.name}
            </div>

            <div className="btns">
                {
                    edit ?
                        <div className="edit-delete">
                            <span className='edit tag-btn'
                                onClick={() => setshowModel(true)}>
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

            <Modal showModel={showModel}>
                <RenameProject
                    project={project}
                    setShowModel={setshowModel}
                />
            </Modal>

        </div>
    )
}

export default Project