import React from 'react';
import selector from '../assets/img/sel_right.png';

const ButtonColloborate: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    className="inline-flex items-center cursor-pointer"
    onClick={onClick}
  >
    <img src={selector}  alt="Icono de selector" style={{width: "20px", height: "20px", marginRight: "0.5rem" }} />
    ¿Cómo colaborar?
  </button>
);

export default ButtonColloborate;
