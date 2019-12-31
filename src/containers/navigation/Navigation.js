import React from 'react';
import Button from 'react-bootstrap/Button';
import './Navigation.scss';
import { connect } from 'react-redux';
import { requestCollection, requestPhotos, requestPagination, requestSearchCollections, requestSearchPhotos } from '../../store/actions';
import { Link } from "react-router-dom";
import {Nav} from 'react-bootstrap';

class Navigation extends React.Component {

    getCollections = () => {
        const { requestCollection , requestPagination } = this.props ;
        requestCollection(1);
        requestPagination(1);
    }

    getPhotos = () => {
        const { requestPhotos , requestPagination } = this.props ;
        requestPhotos(1);
        requestPagination(1);
    }

    render() {
        const { pagingType } = this.props;
        return (
            <div className="text-white">
                <Link to="/photos" onClick={this.getPhotos} className={'navLink ' + (this.props.pagingType == 'photos' ? 'text-warning' : 'text-white mx-2')}>Photos</Link>
                <Link to="/collections" onClick={this.getCollections} className={'navLink '+(this.props.pagingType == 'collections' ? 'text-warning mx-2' : 'text-white mx-2')}>Collections</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pagingType: state.pagingType
    }
}

export default connect(mapStateToProps, { requestPhotos, requestCollection, requestPagination, requestSearchCollections, requestSearchPhotos })(Navigation);