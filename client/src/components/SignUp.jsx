import Button from 'react-bootstrap/Button';
import SignUpForm from '../components/SignUpForm';
// import Login from '../components/Login';
import { useState } from 'react';

export default function SignUp() {
    const [showModal, setShowModal] = useState(false);
    // const [changeLogin, setChangeLogin] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    }

    // const handleLoginInstead = () => {
    //     setShowModal(false);
    //     setChangeLogin(true);
    // }

    return (
        <div className="d-flex">
            <Button className="m-4" onClick={handleOpenModal}>Get Started </Button>
      
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
                        <div className="modal-footer d-flex justify-content-between">
                            {/* <div className="d-flex flex-column">
                                <h4>Already have an account?</h4>
                                <Button onClick={handleLoginInstead} >Login</Button>
                            </div> */}

                            <Button className="btn btn-secondary justify-content-end" onClick={handleCloseModal}>Close</Button>
                            {/* <Button type="button" className="btn btn-primary">Save changes</Button> */}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* {changeLogin && (
            <Login />
        )} */}

    </div>
    )
}