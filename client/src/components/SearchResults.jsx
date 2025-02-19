import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

export default function SearchResults({ results }) {
    
    // const imgURL = 'https://image.tmdb.org/t/p/w500/';
    const styles = {
        card: {
            margin: '15px',
        },
    }

    return (
        // <Card.Group>
        //         {results.map((result) => (
        //             // const header = result.name || result.title;
        //             <Card 
        //                 key={result.id}
        //                 // write conditional - if contains result.name use that, else result.title
        //                 header={result.name}{result.title}
        //                 >
        //                 <img src={imgURL}{result.backgrop_path}>
        //                 </img>
        //             </Card>
        //         ))}
        // </Card.Group>
        <div style={styles.card}>
            <Card.Group centered>
                {results.map((result) => {
                    const header = result.name || result.title;
                    const released = result.release_date;
                    const imgURL = result.backdrop_path ? `https://image.tmdb.org/t/p/w500${result.backdrop_path}`: result.profile_path ? `https://image.tmdb.org/t/p/w500${result.profile_path}` : result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : '../../public/unavailable.jpg';
                    console.log(imgURL);

                    return (
                        <Card key={result.id}>
                            <Card.Header>{header}</Card.Header>
                            <img src={imgURL} />
                            <div className="extra content">
                                <span className="left floated"> <button>Add To List</button></span>
                                <span className="right floated">{released}</span>
                            </div>
                        

                        </Card>
                    )
                })}
            </Card.Group>
        </div>
    )
}
// {result.name} {result.title}
SearchResults.propTypes = { results: PropTypes.array };