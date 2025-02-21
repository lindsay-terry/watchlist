import PropTypes from 'prop-types';
// import { Card } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SearchResults({ results }) {
    
    // const imgURL = 'https://image.tmdb.org/t/p/w500/';
    const styles = {
        card: {
            marginBottom: '15px',
            marginTop: '10px',
            width: '100%',
        },
        cardImg: {
            maxHeight: '150px',
            objectFit: 'cover',
        }
    }

    return (
        <Container style={styles.card}>
            <Row className="justify-content-center">
                {results.map((result) => {
                    const header = result.name || result.title;
                    const released = result.release_date;
                    const imgURL = result.backdrop_path ? `https://image.tmdb.org/t/p/w500${result.backdrop_path}`: result.profile_path ? `https://image.tmdb.org/t/p/w500${result.profile_path}` : result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : '../../public/unavailable.jpg';

                    return (
                        <Col xs={12} sm={12} md={6} lg={4} key={result.id}>
                            <Card style={styles.card} >
                                <Card.Title>{header}</Card.Title>
                                <Card.Img variant="top" src={imgURL} style={styles.cardImg}/>
                                <Card.Body className='d-flex align-items-center justify-content-between'>
                                    <Button variant="primary" >Add To List</Button>
                                    <Card.Subtitle className="text-muted justify-content-end">{released}</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
// {result.name} {result.title}
SearchResults.propTypes = { results: PropTypes.array };