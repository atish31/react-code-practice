import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = 'https://api.punkapi.com/v2/beers';

export const Pagination = () => {
    const [beers, setBeers] = useState([]);

    const triggerApi = () => {
        fetch(API_URL).
        then(rawResponse => rawResponse.json()).
        then(response => {
            console.log(response, 'response');
            setBeers((beers) => {
                return beers = response
            });
            console.log(Array.isArray(beers), 'beers');
        })
        .catch(error => {
            throw(error);
        })
    };

    useEffect(() => {
        triggerApi();
    }, []);
    
    return (
        <div>
            {
                beers.map((beer) => (
                    <li key='{beer.id}'>
                        'here' {beer.name};
                    </li>
                ))
            }
        </div>
    );
}