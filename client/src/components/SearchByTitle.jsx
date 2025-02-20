import { useState } from 'react';
import SearchResults from './SearchResults';
// import { FormField, Form, FormInput, Button, ButtonGroup, ButtonOr } from 'semantic-ui-react';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default function SearchByTitle() {
    const [formData, setFormData] = useState({
        search: '',
    });

    const [searchResults, setSearchResults] = useState(null);

    const handleSearch = (event) => {
        const { name, value } = event.target;
        setFormData({
            [name]: value
        });
    };
    // https://api.themoviedb.org/3/movie/550?api_key=
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Fetch request to retrieve movie data from API
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&api_key=${import.meta.env.VITE_API_KEY}&query=${encodeURIComponent(formData.search)}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response not OK.');
        }

        const data = await response.json();
        // Clear form after form submission
        setFormData({
            search: '',
        });
        // Set search results to state variable
        setSearchResults(data);
        console.log('API DATA', data);

    };

    const handleCancel = () => {
        setFormData({
            search: '',
        });
        setSearchResults('');
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control name="search" id="search" value={formData.search} onChange={handleSearch} placeholder="Search for a movie"/>
                </Form.Group>
                <ButtonGroup>
                    <Button type="button" onClick={handleCancel} style={{backgroundColor: 'var(--red-cmyk)', color: 'var(--baby-powder)'}}><i className="pause circle icon "></i>Cancel</Button>
                    <Button type="submit" style={{backgroundColor: 'var(--mantis)', color: 'var(--baby-powder)'}}><i className="play circle icon "></i>Search</Button>
                </ButtonGroup>
            </Form>
            {searchResults ? (
                <SearchResults results={searchResults.results}/>
            ) : '' }
            

        </div>
    )

}