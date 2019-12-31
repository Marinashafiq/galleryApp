import {
    IS_LOADING,
} from '../actions/types';

const INITAIL_STATE = { isLoading : false };

export default (state = INITAIL_STATE , action) => {
    switch (action.type) {
        case IS_LOADING:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

