import AuthService from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function UserProfile() {
    const [user, setUser] = useState('blah');
    const navigate = useNavigate();

    const findProfile = async() => {
        const data = await AuthService.getProfile();
        setUser(data.data);
    }

    // If user is logged out or logs out while on /profile, redirect to homepage
    useEffect(() => {
        if (!AuthService.loggedIn()) {
            navigate('/');
        } else {
            findProfile();
        }
    }, [navigate]);

    // const fetchProfile = () => {
    //     AuthService.getProfile().then(data => setUser(data))
        
    // };

    // useEffect(() => {
    //     AuthService.getProfile().then(data => setUser(data))
    //     console.log(user.data);
    // }, [user]);

    // useEffect(() => {
    //     setUser(AuthService.getProfile())
    // }, [setUser]);

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} s={12} md={6} lg={6}>
                        <div>
                            <h1>
                                Welcome, {user.firstName}!
                            </h1>
                        </div>
                    </Col>
                    <Col xs={12} s={12} md={6} lg={6}>

                    </Col>
                </Row>
                {/* <p> USER PROFILE</p> */}
            </Container>
            {/* <ProfileGreeting user={user} /> */}
        </div>
    )
}