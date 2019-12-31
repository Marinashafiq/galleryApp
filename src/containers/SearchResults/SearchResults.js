import React from 'react';
import { connect } from 'react-redux';
import PhotosList from '../Photos/PhotosList';
import CollectionList from '../Collections/CollectionList';
import CardColumns from 'react-bootstrap/CardColumns';
import { Container } from 'react-bootstrap';
import { requestCollection, requestSearchPhotos, requestSearchCollections, requestPagingType, requestPagination } from '../../store/actions';
import history from '../../routes/history';
import Pagination from '../pagination/Pagination';
import NavElement from '../../components/navbar/Navbar';
import { Tabs, Tab } from 'react-bootstrap'
import './SearchResults.scss';
import { request } from 'http';

class SearchResults extends React.Component {

    componentDidMount() {
        console.log(this.props.pagingType);
        if (history.location.pathname !== '/photos' && history.location.pathname !== '/collections') {
            console.log("HEREEEEEE")
            this.props.requestSearchPhotos(this.props.currentPage, this.props.computedMatch.params.keyword);
            this.props.requestPagingType('search_photos');
        }
        else if (history.location.pathname == '/collections') {
            this.props.requestCollection(this.props.currentPage);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.computedMatch.params.keyword !== this.props.computedMatch.params.keyword && (history.location.pathname !== '/photos' && history.location.pathname !== '/collections')) {
            console.log("FROM UPDATEEE");
            this.props.requestPagination(1);
            this.props.requestSearchPhotos(this.props.currentPage, this.props.computedMatch.params.keyword);
            this.props.requestPagingType('search_photos');
        }
    }

    renderSearchHeader = () => {
        return (
            <div>
                <h2 className="text-white mb-0">Search Results</h2>
                <p className="text-warning mb-0">{this.props.searchKeyword.keyword}</p>
            </div>
        )
    }

    handleSelect = (key) => {
        this.props.requestPagination(1);
        if (key === 'photos') {
            console.log("FROM TABSSS");
            this.props.requestSearchPhotos(this.props.currentPage, this.props.computedMatch.params.keyword);
            this.props.requestPagingType('search_photos');
        }
        else {
            this.props.requestSearchCollections(this.props.currentPage, this.props.computedMatch.params.keyword);
            this.props.requestPagingType('search_collections');

        }
    }

    renderSearchResults = () => {
        return (
            <div>
                {this.renderSearchHeader()}
                <Tabs className="mt-4" defaultActiveKey="photos" onSelect={this.handleSelect} id="uncontrolled-tab-example">
                    <Tab eventKey="photos" title="Photos">
                        <CardColumns className="my-5">
                            <PhotosList />
                        </CardColumns>
                    </Tab>
                    <Tab eventKey="collections" title="Collections">
                        <CardColumns className="my-5">
                            <CollectionList />
                        </CardColumns>
                    </Tab>
                </Tabs>
            </div>
        )
    }

    renderContent = () => {
        switch (this.props.pagingType) {
            case 'search_photos':
                return this.renderSearchResults();
            case 'search_collections':
                return this.renderSearchResults();
            case 'photos':
                return (
                    <div>
                        <h2 className="text-white font-weight-bold">Photos</h2>
                        <small className="text-warning">Check latest photos in Gallery</small>
                        <blockquote className="blockquote mb-0 text-secondary w-75">
                            <small>
                                {' '}
                                Photography is a kind of virtual reality, and it helps if you can create the illusion of being in an interesting world.{' '}
                            </small>
                            <footer className="blockquote-footer text-left">
                                Steven Pinker
                            </footer>
                        </blockquote>
                        <CardColumns className="my-5">
                            <PhotosList />
                        </CardColumns>
                    </div>
                )
            case 'collections':
                return (
                    <div>
                        <h2 className="text-white font-weight-bold">Collections</h2>
                        <small className="text-warning">Check latest collections in Gallery</small>
                        <blockquote className="blockquote mb-0 text-secondary w-75">
                            <small>
                                {' '}
                                Life is like a camera. Just focus on what’s important and capture the good times, develop from the negatives and if things don’t work out, just take another shot.{' '}
                            </small>
                        </blockquote>

                        <CardColumns className="my-5">
                            <CollectionList />
                        </CardColumns>
                    </div>
                )
            default:
                return null
        }
    }

    render() {
        return (
            <div>
                <NavElement />
                <Container className="my-4">

                    {this.renderContent()}

                    <Pagination />
                </Container>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        searchKeyword: state.searchKeyword,
        pagingType: state.pagingType
    }
}

export default connect(mapStateToProps, { requestCollection, requestSearchCollections, requestSearchPhotos, requestPagingType, requestPagination })(SearchResults); 