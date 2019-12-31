import React from 'react';
import Search from '../../containers/search/Search';
import './Header.scss';

const Header = () => {
    return (
        <div className="w-100">
            <h1 className="header-text-color">Gallery React App</h1>
            <p className="header-text-color">
                Gallery app integrated with unsplash api unsing React
                    </p>
            <p className="header-text-color">
                You Can Search & Download images Easily
                    </p>
            <Search />
        </div>
    )
}

export default Header;

