import {
    RECEIVE_PHOTOS,
    REQUEST_PHOTOS,
    REQUEST_SEARCH_PHOTOS,
    REQUEST_PAGINATION,
    REQUEST_PAGINATION_TYPE,
    RECEIVE_COLLECTIONS,
    REQUEST_COLLECTIONS,
    REQUEST_SEARCH_COLLECTIONS,
    RECEIVE_COLLECTION_PHOTOS,
    REQUEST_COLLECTION_PHOTOS,
    REQUEST_COLLECTION_ID,
    REQUEST_DOWNLOAD_PHOTO,
    RECEIVE_DOWNLOAD_PHOTO ,
    REQUEST_RELATED_COLLECTIONS,
    RECEIVE_RELATED_COLLECTIONS
}
    from './types';

export const requestPhotos = (page) => {
    return {
        type: REQUEST_PHOTOS,
        payload: page,
    }
};

export const receivePhotos = (data) => {
    return {
        type: RECEIVE_PHOTOS,
        payload: data
    }
};

export const requestSearchPhotos = (page, keyword) => {
    return {
        type: REQUEST_SEARCH_PHOTOS,
        payload: {
            page,
            keyword,
        }
    }
};

export const requestCollection = (page) => {
    return {
        type: REQUEST_COLLECTIONS,
        payload: page,
    }
};

export const receiveCollections = (data) => {
    return {
        type: RECEIVE_COLLECTIONS,
        payload: data
    }
};

export const requestSearchCollections = (page, keyword) => {
    return {
        type: REQUEST_SEARCH_COLLECTIONS,
        payload: {
            page,
            keyword
        }
    }
};

export const requestCollectionPhotos = (page, id) => {
    return {
        type: REQUEST_COLLECTION_PHOTOS,
        payload: {
            page,
            id
        }
    }
};

export const receiveCollectionsPhotos = (data) => {
    return {
        type: RECEIVE_COLLECTION_PHOTOS,
        payload: data
    }
};

export const requestRelatedCollections = (page, id) => {
    return {
        type: REQUEST_RELATED_COLLECTIONS,
        payload: {
            page,
            id
        }
    }
};

export const receiveRelatedCollections = (data) => {
    return {
        type: RECEIVE_RELATED_COLLECTIONS,
        payload: data
    }
};

export const requestDownloadPhoto = (id) => {
    return {
        type: REQUEST_DOWNLOAD_PHOTO,
        payload: id
    }
};

export const receiveDownloadPhoto = (data) => {
    return {
        type: RECEIVE_DOWNLOAD_PHOTO,
        payload: data
    }
};

// GENERAL ACTIONS

export const requestPagination = (page) => {
    return {
        type: REQUEST_PAGINATION,
        payload: page
    }
};


export const requestPagingType = (pageType) => {
    return {
        type: REQUEST_PAGINATION_TYPE,
        payload: pageType
    }
};

export const requestCollectionId = (id) => {
    return {
        type: REQUEST_COLLECTION_ID,
        payload: id
    }
};

