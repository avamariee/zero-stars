import { useState, useEffect } from 'react';
// import api request from api file
import * as api from './api';

export function useRestaurantSearch(term, location) {

    const [restaurants, setRestaurant] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchparams] = useState({ term, location });

    useEffect(() => {
        // clear array after search result is reset
        setRestaurant([]);
        // fetch from the yelp API
        const fetchData = async () => {
            try {

                const rawData = await api.get('/businesses/search', searchParams);
                const response = await rawData.json();

                setRestaurant(response.restaurants);
                setAmountResults(response.total);

            } catch (e) {
                console.error(e)
            }
        };
        fetchData();
    }, [searchParams]);

    return [restaurants, amountResults, searchParams, setSearchparams];

}