/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function SignUpForm({ isOpen, onClose }) {

    const styles = {
        errorText: {
            color: 'var(--red-cmyk',
        },
    }

    //Store server error messages
    const [serverError, setServerError] = useState('');

    //Initialize form
    const initialFormData = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
    }
    const [formData, setFormData] = useState(initialFormData);

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = (name, value) => {
        let errorMessage = '';
        if (!value) {
            switch (name) {
                case 'firstName':
                    errorMessage = 'First name is required';
                    break;
                case 'lastName': 
                    errorMessage = 'Last name is required';
                    break;
                case 'username':
                    errorMessage = 'Please enter a unique username';
                    break;
                case 'password':
                    errorMessage = 'Please enter a password at least 6 characters';
                    break;
                case 'confirmPassword':
                    errorMessage = 'Please confirm your password';
                    break;
                default:
                    break;
            }
        }
        // Verify password is at least six characters
        if (name === 'password' && value.length < 6) {
            errorMessage = 'Password must be at least 6 characters';
        }
        // Verify 
        if (name === 'confirmPassword' && value !== formData.password) {
            errorMessage = 'Passwords do not match';
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
     }

    // handle onBlur for individual fields
    const handleBlur = (event) => {
        const { name, value } = event.target;
        validate(name, value);
    };

    // Validate form elements to ensure filled out onSubmit
    const handleValidate = () => {
        const newError = {};
        if (!formData.firstName) newError.firstName = 'First name is required.';
        if (!formData.lastName) newError.lastName = 'Last name is required.';
        if (!formData.username) newError.username = 'Please enter a unique username.';
        if (!formData.password) newError.password = 'Please enter a password at least 6 characters.';
        else if (formData.password.length < 6) newError.password = 'Password must be at least 6 characters.';

        if (!formData.confirmPassword) newError.confirmPassword = 'Please re-enter your password.';
        else if (formData.password !== formData.confirmPassword) newError.confirmPassword = 'Passwords do not match.';

        setErrors(newError);

        return Object.keys(newError).length === 0;
    };

    const handleSignup = async (formData) => {
        if (formData) {
            try {
                const response = await fetch('/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                const newUser = await response.json();
                // Throw error if username has already been taken
                if (response.status === 500 && newUser.error.code === 11000) {
                    setServerError('Username already taken, please choose another one.')
                // Only clear and close modal if response is successful
                } else if (response.status === 200) {
                    setFormData(initialFormData);
                    onClose();
                } else {
                    setServerError('An error occured, please try again.');
                }
                console.log('New user:', newUser);
            } catch (error) {
                console.error('Error creating new user', error);
            }
        }
    };
    
    //Handle sign up form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleValidate()) {
            console.log('Form submitted', formData);
            handleSignup(formData);
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>First name</Form.Label>
                        <Form.Control required name="firstName" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="First Name" isInvalid={errors.firstName} />
                        <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control required name="lastName" value={formData.lastName} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Last Name" isInvalid={errors.lastName}/>
                        <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md='12'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control required name="username" value={formData.username} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Username" isInvalid={errors.username}/>
                        <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} md='6'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control required name="password" value={formData.password} onChange={handleChange} onBlur={handleBlur} type="password" placeholder="Password" isInvalid={errors.password}/>
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='6'>
                        <Form.Label>Re-enter Password</Form.Label>
                        <Form.Control required type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} onBlur={handleBlur} placeholder="Re-enter Password" isInvalid={errors.confirmPassword}/>
                        <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <div className="d-flex justify-content-center">
                    <Button className="m-3" type="submit" onClick={handleSubmit}>Submit</Button>
                </div>
                {/* Show server error if it exists  */}
                <div className="d-flex justify-content-center" style={styles.errorText}>
                    {serverError && (
                        <p>{serverError}</p>
                    )}
                </div>
            </Form>
        </div>
    )
}

SignUpForm.propTypes = { isOpen: PropTypes.bool.isRequired, onClose: PropTypes.func.isRequired };