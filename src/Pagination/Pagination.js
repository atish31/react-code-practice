import { useState, useEffect } from "react";

export const Pagination = () => {
    const api = 'https://api.punkapi.com/v2/beers';
    const [beers, setBeers] = useState([]);
    // const [page, set]?
    const getBeers = (api) => {
        fetch(api).
        then(response => response.json()).
        then(list => { 
            setBeers(beers => beers = list)
        }).catch(error => {
            throw(error);
        }); 
    }

    useEffect(() => {
        getBeers(api);
     }, []);

    return (
        <>
            {
                (beers && beers.length) &&
                beers.map(beer => (
                    <li key={beer.id}>
                        {beer.name}
                    </li>
                ))
            }
        </>
        )
};