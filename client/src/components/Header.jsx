import SignUp from '../components/SignUp';
import Login from '../components/Login';
import LogOut from '../components/LogOut';
import AuthService from '../utils/auth';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

export default function Header() {
    const styles={
        avatar: {
            height: '45px',
        }
    }


    // console.log('Is logged in:', AuthService.loggedIn());

    return (
        <div className='d-flex justify-content-between'>
            <p>HEADER</p>
            <div className='d-flex'>
                {/* <Button>Login</Button>
                <Button>Get Started</Button> */}
                {AuthService.loggedIn() ? (
                    <div className='d-flex'>
                        <p>Welcome!</p> 
                        <Link to="/profile">
                            <Image roundedCircle src="../../images/default-avatar-icon.png" className="m-4" style={styles.avatar} />
                        </Link>
                        <LogOut />
                        {/* <Button></Button> */}
                    </div>
                ) : (
                    <>
                        <Login />
                        <SignUp />
                    </>
                                      
                )}
            </div>
        </div>
    )
}