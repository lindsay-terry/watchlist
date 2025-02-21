import SignUp from '../components/SignUp';

export default function Header() {

    return (
        <div className='d-flex justify-content-between'>
            <p>HEADER</p>
            <div>
                <SignUp />
            </div>
            
        </div>
    )
}