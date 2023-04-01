import React from 'react'
import ProjectForm from './ProjectForm';
import Modal from './Modal';
import { Plus } from 'react-bootstrap-icons'

const AddNewProject = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [projectName, setProjectName] = React.useState("");

    function handleSubmit(e) {

    }

    return (
        <div className="AddNewProject">
            <div className="add-button">
                <span onClick={() => setShowModal(true)}>
                    <Plus size={'20'} />
                </span>
            </div>

            <Modal showModel={showModal} setShowModel={setShowModal}>
                <ProjectForm
                    handleSubmit={handleSubmit}
                    heading="New Project"
                    value={projectName}
                    setValue={setProjectName}
                    setShowModel={setShowModal}
                    confirmButText="+ Add Project"
                />
            </Modal>
        </div>
    )
}

export default AddNewProject