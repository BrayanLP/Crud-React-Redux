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