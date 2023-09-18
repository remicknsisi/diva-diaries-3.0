import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const DMIcon = ({ tooltipText }) => {
  return (
    <div className="icon-container">
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
        <div className="tooltip">{tooltipText}</div>
  </div>
  );
};

export default DMIcon;