import SearchByTitle from '../components/SearchByTitle';

export default function Home() {

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
}


    return (
        <div className="ui container">
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