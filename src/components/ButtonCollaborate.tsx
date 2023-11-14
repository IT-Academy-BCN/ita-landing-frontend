import React from 'react';
import selector from '../assets/img/sel_right.png';
import { useTranslation } from "react-i18next";

const ButtonColloborate: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [t] = useTranslation();

  return (
    <button
      className="inline-flex items-center cursor-pointer"
      onClick={onClick}
    >
      <img src={selector} alt="Icono de selector" style={{ width: "20px", height: "20px", marginRight: "0.5rem" }} />
      {t('landingPage.buttonCollaborate.buttonTitle')}
    </button>
  );
};

export default ButtonColloborate;
