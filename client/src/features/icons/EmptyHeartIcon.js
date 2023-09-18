import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const EmptyHeartIcon = ({ tooltipText }) => {
  return (
    <div className="icon-container">
      <FontAwesomeIcon className="icon" icon={faHeart} />
      <div className="tooltip">{tooltipText}</div>
    </div>
  );
};

export default EmptyHeartIcon;