export const getMe = (token) => {
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

// save review data for a logged in user
export const saveFood = (FoodData, token) => {
    return fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(FoodData),
    });
};


// search to yelp api
export const searchYlpFoods = (query) => {
    return fetch('https://api.yelp.com/v3/businesses/' + business.id + '/reviews',
        {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                Origin: 'localhost',
                withCredentials: true,
                "Access-Control-Allow-Origin": "*"
            }
        })
};