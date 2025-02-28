import Button from 'react-bootstrap/Button';
import AuthService from '../utils/auth';

export default function LogOut() {

    const handleLogout = () => {
        AuthService.logout();
    }

    return (
        <div>
            <Button onClick={handleLogout} className='m-4'>Log Out</Button>
        </div>
    )
}