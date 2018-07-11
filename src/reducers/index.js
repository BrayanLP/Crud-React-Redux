import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { postAlbum } from './postAlbum';
import { showUsers } from './users';

import todos from './todos/todos';
import visibilityFilter from './todos/visibilityFilter';
import { showCrud, editCrud, addCrud, updateCrud } from './crud';

const rootReducer = combineReducers({
    listUsers: showUsers,
    news: postReducer,
    albums: postAlbum,
    todos,
    visibilityFilter,
    showCrud,
    editCrud,
    addCrud,
    updateCrud,
});

export default rootReducer;
