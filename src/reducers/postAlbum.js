import { SHOW_ALBUMS, EDIT_ALBUMS } from '../actions/albums';

const initialState = {
    data: [],
    items: [],
    item: {},
};

export function postAlbum(state = initialState, action) {
    switch (action.type) {
    case SHOW_ALBUMS:
        return {
            ...state,
            items: action.payload,
        };
    case EDIT_ALBUMS:
        return {
            ...state,
            item: action.payload,
        };
        // const index = state.findIndex(post => post.id === action.post.id);
        // if (index > -1) {
        //     return state.map(post => {
        //         if (post.id === action.post.id) return action.post;
        //         return post;
        //     });
        // } else {
        //     return [...state, action.post];
        // }
    default:
        return state;
    }
}
