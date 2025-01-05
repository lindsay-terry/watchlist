import PropTypes from 'prop-types';

export default function SearchResults({ results }) {
    
    return (
        <div>
            {results.map((result) => (
                <div key={result.id}> {result.name} {result.title}</div>
            ))}
        </div>
    )
}

SearchResults.propTypes = { results: PropTypes.array };