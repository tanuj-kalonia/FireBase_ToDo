import React from 'react'
import ProjectForm from './ProjectForm'

const RenameProject = ({ project, setShowModel }) => {
    const [newProjectName, setNewProjectName] = React.useState(project.name)
    function handleSubmit(e) {

    }
    return (
        <div className="RenameProject">
            <ProjectForm
                handleSubmit={handleSubmit}
                heading="Edit Name"
                value={newProjectName}
                setValue={setNewProjectName}
                setShowModel={setShowModel}
                confirmButText="Confirm"
            />
        </div>
    )
}

export default RenameProject