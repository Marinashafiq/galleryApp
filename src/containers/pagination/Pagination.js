import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import {
    requestPagination,
    requestPhotos,
    requestSearchPhotos,
    requestCollection,
    requestSearchCollections,
    requestCollectionPhotos
} from '../../store/actions/index';
class Pagination extends React.Component {
    getNext = () => {
        const { collectionsId , 
            searchKeyword , 
            requestPagination , 
            requestPhotos , 
            requestSearchCollections , 
            requestSearchPhotos , 
            currentPage , 
            pagingType , 
            requestCollection ,
            requestCollectionPhotos } = this.props;
        let nextPage = currentPage + 1;
        requestPagination(nextPage);
        if (pagingType === 'photos') {
            requestPhotos(nextPage);
        }
        else if (pagingType === 'search_photos') {
            requestSearchPhotos(nextPage, searchKeyword.keyword);
        }
        else if (pagingType === 'collections') {
            requestCollection(nextPage);
        }
        else if (pagingType === 'search_collections') {
            requestSearchCollections(nextPage,searchKeyword.keyword);
        }
        else if (pagingType === 'collection-photos') {
            requestCollectionPhotos(nextPage, collectionsId);
        }
    }

    getPrev = () => {        
        const { collectionsId , 
            searchKeyword , 
            requestPagination , 
            requestPhotos , 
            requestSearchCollections , 
            requestSearchPhotos , 
            currentPage , 
            pagingType ,
            requestCollectionPhotos } = this.props;
        if (currentPage > 1) {
            let prevPage = currentPage - 1;
            requestPagination(prevPage);
            if (pagingType === 'photos') {
                requestPhotos(prevPage);
            }
            else if (pagingType === 'search_photos') {
               requestSearchPhotos(prevPage, searchKeyword.keyword);
            }
            else if (pagingType === 'collections') {
               requestCollection(prevPage);
            }
            else if (pagingType === 'search_collections') {
                requestSearchCollections(prevPage, searchKeyword.keyword);
            }
            else if (pagingType === 'collection-photos') {
                requestCollectionPhotos(prevPage, collectionsId);
            }
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-between align-items-center">
                <Button variant="outline-warning" onClick={this.getPrev} className="border-raduis-3 text-white px-5" disabled={this.props.currentPage === 1}>Prev</Button>
                <h6 className="text-white mb-0">Page {this.props.currentPage}</h6>
                <Button variant="outline-warning" onClick={this.getNext} className="border-raduis-3 text-white px-5" rel="last">Next</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        pagingType: state.pagingType,
        searchKeyword: state.searchKeyword,
        collectionsId: state.collectionsId
    }
}

export default connect(mapStateToProps, { requestPagination, requestPhotos, requestSearchPhotos, requestCollection, requestSearchCollections, requestCollectionPhotos })(Pagination);