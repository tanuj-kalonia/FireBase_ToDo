import React from 'react'

const ProjectForm = ({ handleSubmit, heading, value, setValue, setShowModel, confirmButText }) => {
    return (
        <form onSubmit={handleSubmit} className="ProjectForm">
            <h3>{heading}</h3>
            <input
                value={value}
                onChange={() => setValue(e => e.target.value)}
                type='text'
                placeholder='Project Name...'
                autoFocus
            />
            <button
                className='cancel'
                role='button'
                onClick={() => setShowModel(false)}
            >
                Cancel
            </button>

            <button className='confirm'>
                {confirmButText}
            </button>
        </form>
    )
}

export default ProjectForm