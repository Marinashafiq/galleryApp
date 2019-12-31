import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './KeywordChip.scss';

const KeywordChip = (props) => {

    const handleClick = (key) =>{
        props.searchWithChips(key);
    }

    return(
        <Badge pill onClick={() => handleClick(props.name)} variant="warning" className="keywordsChip mt-5 mx-4 px-4 py-3">
            {props.name} +
        </Badge>
    )
}

export default KeywordChip ;