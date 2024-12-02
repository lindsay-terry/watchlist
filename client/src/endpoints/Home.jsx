export default function Home() {


    fetch(`https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=${import.meta.env.VITE_API_KEY}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
        } 
    })
        .then(response => {
            if (!response.ok) {
                console.log('Error, response not OK');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data recieved:', data);
        })

    return (
        <div>
            <p>Homepage</p>
            <p>Can see?</p>
        </div>
    )
}