import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

export default function SearchResults({ results }) {
    
    // const imgURL = 'https://image.tmdb.org/t/p/w500/';

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

        <Card.Group>
            {results.map((result) => {
                const header = result.name || result.title;
                const imgURL = `https://image.tmdb.org/t/p/w500${result.backdrop_path}`;
                console.log(imgURL);

                return (
                    <Card key={result.id}>
                        <Card.Header>{header}</Card.Header>
                        <img src={imgURL} />
                    </Card>
                )
             })}
        </Card.Group>
    )
}
// {result.name} {result.title}
SearchResults.propTypes = { results: PropTypes.array };