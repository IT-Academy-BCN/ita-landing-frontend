import cross from "../assets/img/cross.png";
import folder from "../assets/img/new-folder-dynamic-color.png";
import puzzle from "../assets/img/puzzle-dynamic-color.png";
import thumb_up from "../assets/img/thumb-up-dynamic-color.png";
import CardComponentPopupCollaborate from "./CardComponentPopupCollaborate";
import { useTranslation } from "react-i18next";

const PopupHowToCollaborate: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [t] = useTranslation();
    const closePopup = () => {
      onClose();
    };
  
    return (
        <div className="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white flex-col border-2 rounded-xl top-40 font-black bg-opacity-80 fixed z-50 container mx-auto">
             <div className="p-3 flex">
                <img
                    src={cross}
                    className="cursor-pointer w-3 ml-auto absolute top-3 right-3" 
                    alt="button_close"
                    onClick={closePopup} 
                />
            </div>
            <h1 className="bg-white text-3xl text-black font-bold mt-14 mb-10">
                {t('landingPage.buttonCollaborate.title')}
            </h1>
            <div className="flex z-50 rounded-xl bg-white flex-wrap items-center justify-center bg-opacity-80 mb-24">
                <CardComponentPopupCollaborate
                    pos={"01"}
                    imgSrc1={folder}
                    title={t('landingPage.buttonCollaborate.firstCard.title')}
                    description={t('landingPage.buttonCollaborate.firstCard.description')}
                />

                <CardComponentPopupCollaborate
                    pos={"02"}
                    imgSrc1={puzzle}
                    title={t('landingPage.buttonCollaborate.secondCard.title')}
                    description={t('landingPage.buttonCollaborate.secondCard.description')}
                />

                <CardComponentPopupCollaborate
                    pos={"03"}
                    imgSrc1={thumb_up}
                    title={t('landingPage.buttonCollaborate.thirdCard.title')}
                    description={t('landingPage.buttonCollaborate.thirdCard.description')}
                />
            </div>
        </div>
    </div>
    );
};

export default PopupHowToCollaborate;
