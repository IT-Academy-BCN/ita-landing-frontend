import { deleteApiFaqs } from "../../../store/reducers/faqsCall/faqsReducer";
import locker from '../../../assets/img/locker.png';
import { Dispatch } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";
interface DeleteFaqModalProps{
    deleteModal: (flag: boolean) => void;
    faqId: number;
    acces_token: string;
    dispatch: Dispatch;
  }

function DeleteFaqModal({ deleteModal, faqId, acces_token, dispatch }: DeleteFaqModalProps) {
    const [t] = useTranslation();
    return (
        <div className="modal modal-open">
            <div className="modal-box flex flex-col items-center justify-center">
                
                <button className='justify-self-end	self-end' onClick={() => deleteModal(false)}>X</button>

                <img src={locker} className='h-[118px]' alt="locker"/>

                <h1 className='text-2xl font-semibold text-black'>{t("backofficePage.faqsComponent.deleteButton.deleteButtonTitle")}</h1>
                <p className='max-w-[70%] text-center my-4 text-black'>{t("backofficePage.faqsComponent.deleteButton.text")}</p>

                <button className="bg-pink-it min-w-[60%] py-2 mb-4 text-white" onClick={()=> deleteApiFaqs(faqId, acces_token, dispatch)}> {t("backofficePage.faqsComponent.deleteButton.saveButton")} </button>

                <button className="min-w-[60%] py-2 mb-4 border-gray-500 text-black" onClick={() => deleteModal(false)}> {t("backofficePage.faqsComponent.deleteButton.closeButton")} </button>

            </div>
        </div>
    );
  }
  export default DeleteFaqModal;