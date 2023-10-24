import React, { useState } from 'react';
import CardComponent from "./CardComponent";
import ButtonCollaborate from './ButtonCollaborate';
import folder from '../assets/img/new-folder-dynamic-color.png';
import puzzle from '../assets/img/puzzle-dynamic-color.png';
import thumb_up from '../assets/img/thumb-up-dynamic-color.png';

const PopupHowToCollaborate: React.FC = () => {
  const [isPopupOpenLocal, setisPopupOpenLocal] = useState(false);

  return (
    <div className="font-black">
      <p className="flex items-center justify-start">
      <ButtonCollaborate onClick={() => setisPopupOpenLocal(true)} />
      </p>

      {isPopupOpenLocal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h2 className="text-xl font-semibold">¿Cómo coloborar en proyectos IT Academy?</h2>
            <div className="flex flex-wrap items-center justify-center container mx-auto"> 
                <CardComponent 
                pos={"01"}
                imgSrc1={folder}
                title="Pregunta a tu mentor"
                description="Resolvera todas tus dudas y te ayudara con setup del proyecto"
                />

                <CardComponent
                pos={"02"}
                imgSrc1={puzzle}
                title="Unete al equipo"
                description="Tu mentor de proyecto te ayudará"
                />

                <CardComponent
                pos={"03"}
                imgSrc1={thumb_up}
                title="Entrega tu funcionalidades"
                description="Una vez realices tu tareas"
                />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupHowToCollaborate;
