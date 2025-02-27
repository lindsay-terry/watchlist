/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import { UNSAFE_ErrorResponseImpl } from 'react-router-dom';
import AuthService from '../utils/auth';

export default function LoginForm({ isOpen, onClose }) {

    const styles = {
        errorText: {
            color: 'var(--red-cmyk',
        },
    };

    const [serverError, setServerError] = useState('');

    //Initialize form
    const initialFormData = {
        username: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value });
    };

    const validate = (name, value) => {
        let errorMessage = '';
        if (!value) {
            switch (name) {
                case 'username':
                    errorMessage = 'Please fill out your username.';
                    break;
                case 'password':
                    errorMessage = 'Please enter your password.';
                    break;
                default:
                    break;
            };
        };
    };

    // Validate fields if target is blurred
    const handleBlur = (event) => {
        const { name, value } = event.target;
        validate(name, value);
    };

    const handleValidate = () => {
        const newError = {};
        if (!formData.username) newError.username = "Please fill out your username.";
        if (!formData.password) newError.password = "Please enter your password.";

        setErrors(newError);

        return Object.keys(newError).length === 0;
    };

    const handleLogin = async(formData) => {
        if (formData) {
            try {
                const response = await fetch('/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                const user = await response.json();
                if (response.status !== 200) {
                    setServerError('Incorrect username or password, please try again');
                } else if (response.status === 200) {
                    AuthService.login(user.token);
                    setFormData(initialFormData);
                    onClose();
                } else {
                    setServerError('An error has occurred, please try again.');
                }
                console.log('User', user);
            } catch (error) {
                console.error('Error creating new user', error);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleValidate()) {
            console.log('form Submitted', formData);
            handleLogin(formData);
        }
    };


    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label>Username</Form.Label>
                        <Form.Control required name="username" value={formData.username} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Username" isInvalid={errors.username} />
                        <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required name="password" value={formData.password} onChange={handleChange} onBlur={handleBlur} type="password" isInvalid={errors.password} />
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-center">
                    <Button className="m-3" type="submit" onClick={handleSubmit}>Submit</Button>
                </div>
                <div className="d-flex justify-content-center" style={styles.errorText}>
                    {serverError && (
                        <p>{serverError}</p>
                    )}
                </div>
            </Form>
        </div>
    )
}

LoginForm.propTypes = { isOpen: PropTypes.bool.isRequired, onClose: PropTypes.func.isRequired };