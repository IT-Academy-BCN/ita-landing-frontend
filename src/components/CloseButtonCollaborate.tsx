import React from 'react';
import cross from '../assets/img/cross.png';

interface CloseButtonCollaborateProps {
  onClick: () => void;
}

const CloseButtonCollaborate: React.FC<CloseButtonCollaborateProps> = ({ onClick }) => {
  return (
    <button className="close-button" onClick={onClick}>
      <img src={cross} alt="Close" />
    </button>
  );
};

export default CloseButtonCollaborate;