import { SHOW_USERS } from '../actions/users'

const initialState = {
    data: []
}

export function showUsers(state = initialState, action) {
    
    switch (action.type) {
        case SHOW_USERS:
            return Object.assign({}, state, {data: action.payload})
        default:
            return state 
    }
    
}