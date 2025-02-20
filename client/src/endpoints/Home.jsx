import SearchByTitle from '../components/SearchByTitle';
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
        tvImg: {
            maxHeight: '300px',
            padding: '10px',
            margin: '20px',
        },
    }


 

    return (
        <div className="ui container">
            <div className="ui grid">
                <div className="four wide column">
                    <img src={`../../images/tv${randomNumber}.png`} style={styles.tvImg} alt="Image of retro style TV"></img>
                </div>
                <div className="eight wide column">
                        <p>Sign-up Form</p>
                </div>
            </div>


            <div style={styles.backgroundHero} className="ui two column stackable grid">
                <h1 className="ui center aligned icon header">
                    <i className="circular film icon"></i>
                    Start Building Your Watchlist
                </h1>
              
                <div className="ui container" >
                    <SearchByTitle />
                </div>
            </div>
        </div>
    )
}