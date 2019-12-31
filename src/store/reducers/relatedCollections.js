import {
    RECEIVE_RELATED_COLLECTIONS
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_RELATED_COLLECTIONS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

