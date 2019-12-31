import { call, put, takeLatest , takeEvery } from 'redux-saga/effects';
import {
    RECEIVE_PHOTOS,
    REQUEST_PHOTOS,
    RECEIVE_SEARCH_PHOTOS,
    REQUEST_SEARCH_PHOTOS,
    RECEIVE_COLLECTIONS,
    REQUEST_COLLECTIONS,
    REQUEST_SEARCH_COLLECTIONS,
    RECEIVE_SEARCH_COLLECTIONS,
    REQUEST_COLLECTION_PHOTOS,
    RECEIVE_COLLECTION_PHOTOS,
    REQUEST_DOWNLOAD_PHOTO,
    RECEIVE_DOWNLOAD_PHOTO,
    RECEIVE_RELATED_COLLECTIONS,
    REQUEST_RELATED_COLLECTIONS
} from '../actions/types';
import api from "../../network/apis";
import FileSaver from 'file-saver';

// GET PHOTOS
function* getPhotosList(action) {
    try {
        const response = yield call(api.getPhotos, action.payload);
        yield put({ type: RECEIVE_PHOTOS, payload: response.data, totalPages: response.headers['x-total'] });
    } catch (err) {
        console.log(err);
    }
}

// SEARCH PHOTOS
function* getSearchPhotos(action) {
    try {
        const response = yield call(api.getSearchPhotos, action.payload.page, action.payload.keyword);
        yield put({ type: RECEIVE_SEARCH_PHOTOS, payload: response.data.results, totalPages: response.headers['x-total'] });
    } catch (err) {
        console.log(err);
    }
}

// GET COLLECTIONS
function* getCollectionsList(action) {
    try {
        const response = yield call(api.getCollections, action.payload);
        yield put({ type: RECEIVE_COLLECTIONS, payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

// SEARCH COLLECTIONS
function* getSearchCollections(action) {
    try {
        const response = yield call(api.getSearchCollections, action.payload.page, action.payload.keyword);
        yield put({ type: RECEIVE_SEARCH_COLLECTIONS, payload: response.data.results });
    } catch (err) {
        console.log(err);
    }
}

// GET PHOTOS OF SPECIFIC COLLECTION
function* getCollectionPhotos(action) {
    try {
        console.log(action);
        const response = yield call(api.getCollectionPhotos, action.payload.page, action.payload.id);
        yield put({ type: RECEIVE_COLLECTION_PHOTOS, payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

// GET PHOTOS OF SPECIFIC COLLECTION
function* getRelatedCollections(action) {
    try {
        const response = yield call(api.getRelatedCollections, action.payload.page, action.payload.id);
        yield put({ type: RECEIVE_RELATED_COLLECTIONS, payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

// DOWNLOAD IMAGES
function* getDownloadImage(action) {
    try {
        const response = yield call(api.downloadImages, action.payload);
        FileSaver.saveAs(response.data.url, `Unsplash-${action.payload}.jpg`);
        yield put({ type: RECEIVE_DOWNLOAD_PHOTO, payload: response.data });
    } catch (err) {
        console.log(err);
    }
}


// Get the response of the latest request(s) 
export default function* mySaga() {
    yield takeLatest(REQUEST_PHOTOS, getPhotosList);
    yield takeLatest(REQUEST_SEARCH_PHOTOS, getSearchPhotos);
    yield takeLatest(REQUEST_COLLECTIONS, getCollectionsList);
    yield takeLatest(REQUEST_SEARCH_COLLECTIONS, getSearchCollections);
    yield takeLatest(REQUEST_COLLECTION_PHOTOS, getCollectionPhotos);
    yield takeLatest(REQUEST_RELATED_COLLECTIONS, getRelatedCollections);
    yield takeLatest(REQUEST_DOWNLOAD_PHOTO, getDownloadImage);
}