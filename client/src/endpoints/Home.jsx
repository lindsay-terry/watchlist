import { useState } from 'react';
import { FormField, Form, FormInput, Button, ButtonGroup, ButtonOr } from 'semantic-ui-react';

export default function Home() {
    const [formData, setFormData] = useState({
        search: '',
    });

    const handleSearch = (event) => {
        const { name, value } = event.target;
        setFormData({
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted', formData.search);
    };

    const handleCancel = () => {
        setFormData({
            search: '',
        });
    };


    return (
        <div>
            {/* <p>HOMEPAGE</p> */}
            <Form onSubmit={handleSubmit}>
                <FormField>
                    <FormInput name="search" id="search" value={formData.search} onChange={handleSearch} placeholder="Search for a TV show or movie"/>
                </FormField>
                <ButtonGroup>
                    <Button type="button" onClick={handleCancel}>Cancel</Button>
                    <ButtonOr />
                    <Button type="submit">Search</Button>
                </ButtonGroup>
            </Form>
        </div>
    )
}