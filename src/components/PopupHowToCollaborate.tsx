/* import React, { useState } from 'react'; */
/* import ButtonCollaborate from './ButtonCollaborate'; */
import folder from '../assets/img/new-folder-dynamic-color.png';
import puzzle from '../assets/img/puzzle-dynamic-color.png';
import thumb_up from '../assets/img/thumb-up-dynamic-color.png';
import CardComponentPopupCollaborate from './CardComponentPopupCollaborate';
import CardComponentPopupCollaboratePopupCollaborate from './CardComponentPopupCollaborate';

const PopupHowToCollaborate: React.FC = () => {
 /*  const [isPopupOpenLocal, setisPopupOpenLocal] = useState(false); */

  return (
    <div className="font-black bg-white w-3/4 fixed z-50 top-10">
      <h1 className='text-3xl text-black font-semibold'>¿Cómo coloborar en proyectos IT Academy?</h1>
      
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80">
     
            <div className="flex flex-wrap items-center justify-center container mx-auto"> 
                <CardComponentPopupCollaboratePopupCollaborate
                pos={"01"}
                imgSrc1={folder}
                title="Pregunta a tu mentor"
                description="Resolvera todas tus dudas y te ayudara con setup del proyecto"
                />

                <CardComponentPopupCollaborate
                pos={"02"}
                imgSrc1={puzzle}
                title="Unete al equipo"
                description="Tu mentor de proyecto te ayudará"
                />

                <CardComponentPopupCollaborate
                pos={"03"}
                imgSrc1={thumb_up}
                title="Entrega tu funcionalidades"
                description="Una vez realices tu tareas"
                />
            </div>
          </div>
        </div>
  );
};

export default PopupHowToCollaborate;
