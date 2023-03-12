import React from 'react'

import Modal from './Modal';

const AddNewTodo = () => {

    const [showModal, setshowModal] = React.useState(false);

    return (
        <div className='AddNewTodo'>

            <div className="btn">
                <button onClick={() => setshowModal(true)}>+ New Todo</button>
            </div>

            <Modal showModel={showModal} setShowModel={setshowModal}>
                <div>Hello world</div>
            </Modal>
        </div>
    )
}

export default AddNewTodo