import SignUp from '../components/SignUp';
import Login from '../components/Login';
// import Button from 'react-bootstrap/Button';

export default function Header() {

    return (
        <div className='d-flex justify-content-between'>
            <p>HEADER</p>
            <div className='d-flex'>
                {/* <Button>Login</Button>
                <Button>Get Started</Button> */}
                <Login />
                <SignUp />
            </div>
        </div>
    )
}