import {
    RECEIVE_PHOTOS,
    RECEIVE_SEARCH_PHOTOS,
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return { ...state, ...action.payload };
        case RECEIVE_SEARCH_PHOTOS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

