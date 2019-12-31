import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loader.scss';

const Loader = () => {
    return (
        <div className="loaderContainer">
            <Spinner animation="border" variant="warning"/>
        </div>
    )
}

export default Loader ;