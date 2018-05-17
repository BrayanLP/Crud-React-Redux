import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { showUsers } from './users';
import { showAlbums } from './albums';

const rootReducer = combineReducers({
    listUsers: showUsers,
    news: postReducer, 
    album: showAlbums
})

export default rootReducer;