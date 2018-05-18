import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { postAlbum } from './postAlbum';
import { showUsers } from './users';

const rootReducer = combineReducers({
    listUsers: showUsers,
    news: postReducer,
    albums: postAlbum,
});

export default rootReducer;
