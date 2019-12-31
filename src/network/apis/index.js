import galleryURL from './base';


let handlerEnabled = true;

const getPhotos = async (page_number = 1) => await galleryURL.get(`/photos?per_page=20&page=${page_number}`, { handlerEnabled });
const getSearchPhotos = async (page_number = 1, keyword) => await galleryURL.get(`/search/photos?per_page=20&page=${page_number}&query=${keyword}`, { handlerEnabled });
const getCollections = async (page_number = 1) => await galleryURL.get(`/collections?per_page=20&page=${page_number}`, { handlerEnabled });
const getSearchCollections = async (page_number = 1, keyword) => await galleryURL.get(`/search/collections?per_page=20&page=${page_number}&query=${keyword}`, { handlerEnabled });
const getCollectionPhotos = async (page_number = 1, id) => await galleryURL.get(`/collections/${id}/photos?per_page=20&page=${page_number}`, { handlerEnabled });
const getRelatedCollections = async (page_number = 1, id) => await galleryURL.get(`/collections/${id}/related?per_page=20&page=${page_number}`, { handlerEnabled });
const downloadImages = async (id) => await galleryURL.get(`/photos/${id}/download`, { handlerEnabled });


export default { 
    getPhotos, 
    getSearchPhotos, 
    getCollections, 
    getSearchCollections , 
    getCollectionPhotos , 
    getRelatedCollections ,
    downloadImages 
};