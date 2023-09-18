import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PlusIcon = ({ tooltipText }) => {
  return (
  <div className="icon-container">
    <FontAwesomeIcon className="icon" icon={faPlus} />
    <div className="tooltip">{tooltipText}</div>
  </div>
  );
};

export default PlusIcon;