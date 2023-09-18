import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const CommentIcon = ({ tooltipText }) => {
  return (
    <div className="icon-container">
    <FontAwesomeIcon className="icon" icon={faComment} />
    <div className="tooltip">{tooltipText}</div>
</div>
  );
};

export default CommentIcon;