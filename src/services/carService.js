import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/data'

export const getAll = () => request.get(`${baseUrl}/cars`);

export const getMyCars = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/cars?where=${query}`);
}


export const create = async (carData, token) => {
    let response = await fetch(`${baseUrl}/cars`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...carData, likes: [] })
    });

    let result = await response.json();

    return result;
}

export const getOne = (carId) => {
    return fetch(`${baseUrl}/cars/${carId}`)
        .then(res => res.json())
};

export const update = (carId, carData) => request.put(`${baseUrl}/cars/${carId}`, carData);

export const destroy = (carId, token) => {
    return fetch(`${baseUrl}/cars/${carId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

export const like = (userId, carId) => request.post(`${baseUrl}/likes`, {userId, carId});

export const getCarLikes = (carId) => {
    const query = encodeURIComponent(`carId="${carId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};