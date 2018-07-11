const Api = 'https://jsonplaceholder.typicode.com';

export const fecthCrud = () => {
    return dispatch => {
        fetch(Api + '/posts')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: 'FETCH_CRUD',
                    data: data,
                }),
            );
    };
};

export const fecthCrudEdit = id => {
    return dispatch => {
        fetch(Api + `/posts/${id}`)
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: 'FETCH_CRUD_EDIT',
                    data: data,
                }),
            );
    };
};

export const createCrud = postData => {
    return dispatch => {
        fetch(Api + `/posts/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: 'NEW_CRUD',
                    data: data,
                }),
            );
    };
};

export const updateCrud = (data, id) => {
    return dispatch => {
        fetch(Api + `/posts/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: 'UPDATE_CRUD',
                    data: data,
                }),
            );
    };
};
