import React from 'react'
import { CaretUp, Palette, PencilFill } from 'react-bootstrap-icons';

import AddNewProject from './AddNewProject';
import Project from './Project'

const Projects = () => {

    const [showMenu, setShowMenu] = React.useState(true);
    const [edit, setEdit] = React.useState(false);
    const pencilColor = edit ? "#0b56f3" : "#000"

    const projects = [
        { id: 0, name: 'Personal', numOfTodos: 0 },
        { id: 1, name: 'Work', numOfTodos: 1 },
        { id: 2, name: 'Study', numOfTodos: 2 },
    ]
    return (
        <div className="projects">
            <div className="header">
                <div className="title">
                    <Palette size={'18'} />
                    <p>Projects</p>
                </div>

                <div className="btns">
                    {
                        showMenu && projects.length > 0 &&
                        <span className='edit tag-btn' onClick={() => setEdit(edit => !edit)}>
                            <PencilFill size={'15'} color={pencilColor} />
                        </span>
                    }
                    <span className='tag-btn'>
                        <AddNewProject />
                    </span>
                    <span className='arrowm tag-btn'>
                        <CaretUp size={'20'} />
                    </span>
                </div>
            </div>

            {/* render project */}
            <div className="items">
                {
                    projects.map(project => (
                        <Project
                            project={project}
                            key={project.id}
                            edit={edit}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;
