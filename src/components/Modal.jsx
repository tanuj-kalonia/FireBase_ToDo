import React from 'react'

const Modal = ({ children, showModel, setShowModel }) => {

    const modelRef = React.useRef();

    const closeModel = (e) => {
        if (e.target === modelRef.current) {
            setShowModel(false);
        }
    }

    return (
        showModel &&
        <div className='Modal' onClick={closeModel} ref={modelRef}>
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Modal