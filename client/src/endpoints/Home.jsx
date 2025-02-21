import SearchByTitle from '../components/SearchByTitle';
import SignUp from '../components/SignUp';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Home() {
    const [randomNumber, setRandomNumber] = useState(null);

    useEffect(() => {
        const newRandomNumber = Math.floor(Math.random() * 5) + 1;
        setRandomNumber(newRandomNumber)
    }, []);

    

// Search movie or TV show by title
// Search by genre, movie or TV show
// Add to watchlist
// Check watched - show on WatchedList
// Recommend?  Show recommended shows on user profile

// Create user profile
// Log in/sign up pages

    const styles = {
        backgroundHero: {
            backgroundColor: 'var(--baby-powder)',
            borderRadius: '20px',
            boxShadow: '0px 3px 5px var(--black)',
        },
        heading: {
            color: 'var(--baby-powder)',
        },
        tvImg: {
            maxHeight: '300px',
            padding: '10px',
            margin: '20px',
        },
    }


 

    return (
        <Container>
            <div className="d-flex">
                <div className="">
                    <img src={`../../images/tv${randomNumber}.png`} style={styles.tvImg} alt="Image of retro style TV"></img>
                </div>
                <div className="">
                        <h1 style={styles.heading} className='p-2'>Create a free account to share movies and tv shows with friends and family</h1>
                        {/* <Button className="m-5 p-2">Get Started Now!</Button> */}
                        <SignUp />
                </div>
            </div>


            <Container style={styles.backgroundHero}>
                <div className="d-flex flex-column align-items-center">
                    <h1 className="p-3">
                        <i className="bi bi-film m-3"></i>
                    </h1>
                    <h1>
                        Start Building Your Watchlist
                    </h1>
                </div>

              
                <div className="" >
                    <SearchByTitle />
                </div>
            </Container>
        </Container>
    )
}