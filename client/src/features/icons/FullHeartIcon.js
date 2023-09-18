import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FullHeartIcon = ({ tooltipText }) => {
  return (
    <div className="icon-container">
      <FontAwesomeIcon className="icon" icon={faHeart} />
      <div className="tooltip">{tooltipText}</div>
    </div>
  );
};

export default FullHeartIcon;