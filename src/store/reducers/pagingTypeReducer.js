import {
    RECEIVE_PHOTOS,
    RECEIVE_SEARCH_PHOTOS,
    RECEIVE_SEARCH_COLLECTIONS,
    RECEIVE_COLLECTIONS,
    RECEIVE_COLLECTION_PHOTOS
} from '../actions/types';

export default (pagingType = 'search_photos', action) => {
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return 'photos';
        case RECEIVE_SEARCH_PHOTOS:
            return 'search_photos';
        case RECEIVE_SEARCH_COLLECTIONS:
            return 'search_collections';
        case RECEIVE_COLLECTIONS:
            return 'collections';
        case RECEIVE_COLLECTION_PHOTOS:
            return 'collection-photos';
        default:
            return pagingType;
    }
}
