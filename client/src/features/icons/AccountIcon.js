import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AccountIcon = ({ tooltipText }) => {
  return (
  <div className="icon-container">
    <FontAwesomeIcon className="icon" icon={faUser} />
    <div className="tooltip">{tooltipText}</div>
  </div>
  );
};

export default AccountIcon;