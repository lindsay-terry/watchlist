import AuthService from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function UserProfile() {
    const navigate = useNavigate();

    // If user is logged out or logs out while on /profile, redirect to homepage
    useEffect(() => {
        if (!AuthService.loggedIn()) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <Container>
            <Row>
                <Col xs={12} s={12} md={6} lg={6}>

                </Col>
            </Row>
            {/* <p> USER PROFILE</p> */}
        </Container>
    )
}