import axios from 'axios';
import { requestHandler, errorHandler, successHandler } from '../interceptor';

const galleryURL = axios.create({
    baseURL: `https://api.unsplash.com/`,
    headers: {
        'Accept-Version': 'v1',
        'Authorization': 'Client-ID f3854e4160a015b7b70b58d08f75e56ca52028ed0dc7c4b9e4cb67c81858c017'
    },
    params: {
        'client_id': 'f3854e4160a015b7b70b58d08f75e56ca52028ed0dc7c4b9e4cb67c81858c017'
    }
});

galleryURL.interceptors.request.use(request =>
    requestHandler(request)
);

galleryURL.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);

export default galleryURL;