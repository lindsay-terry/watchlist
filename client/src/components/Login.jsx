import Button from 'react-bootstrap/Button';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';

export default function Login() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='d-flex'>
            <Button className="m-4" onClick={handleOpenModal}>Login</Button> 

            {showModal && (
            <div className="modal show" style={{ display: 'block' }} data-bs-backdrop="static" aria-hidden="false" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Log In</h5>
                            <Button className="btn-close" onClick={handleCloseModal} aria-label="Close"></Button>
                        </div>
                        <div className="modal-body">
                            <LoginForm isOpen={showModal} onClose={handleCloseModal}/>
                        </div>
                        <div className="modal-footer">
                            <Button className="btn btn-secondary" onClick={handleCloseModal}>Close</Button>
                        </div>
                    </div>
                </div>
            </div>

            )}
        </div>
    )
}