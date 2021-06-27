import { API_BASE_URL, BEARER_TOKEN } from "./yelp";
const queryString = require('query-string');


export function get(path, queryParams) {
    // {term: 'burgers,', location: 'utah'}
    // term=burgers&location=utah
    const query = queryString.stringify(queryParams)
    return fetch(`${API_BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    });
}