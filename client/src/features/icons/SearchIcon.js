import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchIcon = ({ tooltipText }) => {
    
  return (
    <div className="icon-container">
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        <div className="tooltip">{tooltipText}</div>
    </div>
  );
};

export default SearchIcon;