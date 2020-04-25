import { useState, useEffect } from 'react';
import yelp from '../api/Yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchYelpApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'egypt'
                }
            });
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage(error);
        }
        //console.log(response);
    };

    useEffect(() => {searchYelpApi('Burger')}, []);

    return [results, errorMessage, searchYelpApi];
};