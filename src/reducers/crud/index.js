// import { fecthCrud }  from '../../actions/crud'
export const showCrud = (state = [], action) => {
    switch (action.type) {
    case 'FETCH_CRUD':
        return {
            ...state,
            data: action.data,
        };
    default:
        return state;
    }
};

export const editCrud = (state = {}, action) => {
    switch (action.type) {
    case 'FETCH_CRUD_EDIT':
        return action.data;

    default:
        return state;
    }
};

export const addCrud = (state = {}, action) => {
    switch (action.type) {
    case 'NEW_CRUD':
        return action.data;
    default:
        return state;
    }
};
