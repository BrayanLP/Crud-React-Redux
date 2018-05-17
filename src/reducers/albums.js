import { SHOW_ALBUMS } from '../actions/albums'

const initialState = {
    data: []
}

export function showAlbums(state = initialState, action) {
    
    switch (action.type) {
        case SHOW_ALBUMS:
            return Object.assign({}, state, {data: action.payload})
        default:
            return state 
    }
    
}