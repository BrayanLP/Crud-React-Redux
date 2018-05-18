import axios from 'axios';

export const SHOW_ALBUMS = 'SHOW_ALBUMS';
export const EDIT_ALBUMS = 'EDIT_ALBUMS';
export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POST = 'NEW_POST';

const apiBaseUrl = 'https://jsonplaceholder.typicode.com/albums';

export const showAlbums = () => {
    return (dispatch, getState) => {
        axios.get(apiBaseUrl).then(response => {
            dispatch({ type: SHOW_ALBUMS, payload: response.data });
        });
    };
};

export const editAlbums = id => {
    return (dispatch, getState) => {
        axios.get(apiBaseUrl + `/${id}`).then(response => {
            dispatch({ type: EDIT_ALBUMS, payload: response.data });
        });
    };
};

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts,
            }),
        );
};

export const createPost = postData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
        .then(res => res.json())
        .then(post =>
            dispatch({
                type: NEW_POST,
                payload: post,
            }),
        );
};
