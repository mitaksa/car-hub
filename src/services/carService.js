import { request } from "./requester.js";

const baseUrl = 'http://localhost:3030/data'

export const getAll = () => request(`${baseUrl}/cars`); 

export const getMyCars = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request(`${baseUrl}/cars?where=${query}`); 
} 


export const create = async (carData, token) => {
    let response = await fetch (`${baseUrl}/cars`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...carData, likes: []})
    });

    let result = await response.json();

    return result;
}