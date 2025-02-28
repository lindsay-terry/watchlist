import SignUp from '../components/SignUp';
import Login from '../components/Login';
import LogOut from '../components/LogOut';
import AuthService from '../utils/auth';

// import Button from 'react-bootstrap/Button';

export default function Header() {
    console.log('Is logged in:', AuthService.loggedIn());

    return (
        <div className='d-flex justify-content-between'>
            <p>HEADER</p>
            <div className='d-flex'>
                {/* <Button>Login</Button>
                <Button>Get Started</Button> */}
                {AuthService.loggedIn() ? (
                    <div className='d-flex'>
                        <p>Welcome!</p> 
                        <LogOut />
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