import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DeleteIcon = () => {
  return (
    <FontAwesomeIcon className="icon" icon={faXmark} />
  );
};

export default DeleteIcon;