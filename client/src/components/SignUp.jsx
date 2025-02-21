import Button from 'react-bootstrap/Button';
import SignUpForm from '../components/SignUpForm';
import { useState } from 'react';

export default function SignUp() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div>
            <div>
                <Button className="m-4" onClick={handleOpenModal}>Get Started </Button>
            </div>

        {showModal && (
            <div className="modal show" style={{ display: 'block' }} data-bs-backdrop="static" aria-hidden="false" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create a Free Account</h5>
                            <Button className="btn-close" onClick={handleCloseModal} aria-label="Close"></Button>
                        </div>
                        <div className="modal-body">
                            <SignUpForm isOpen={showModal} onClose={handleCloseModal}/>
                        </div>
                        <div className="modal-footer">
                            <Button className="btn btn-secondary" onClick={handleCloseModal}>Close</Button>
                            {/* <Button type="button" className="btn btn-primary">Save changes</Button> */}
                        </div>
                    </div>
                </div>
            </div>
        )}

    </div>
    )
}