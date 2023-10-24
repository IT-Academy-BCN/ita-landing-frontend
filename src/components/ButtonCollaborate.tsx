import React from 'react';
import selector from '../assets/img/sel_right.png';

const ButtonColloborate: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <span
    className="inline-flex items-center cursor-pointer space-x-6"
    onClick={onClick}
  >
    <img src={selector} className="h-6 w-6 mr-2" alt="Icono de selector" />
    ¿Cómo colaborar?
  </span>
);

export default ButtonColloborate;
