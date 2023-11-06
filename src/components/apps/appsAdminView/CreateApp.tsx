import { RootState } from "../../../store/store";
import { postApiApps } from "../../../store/reducers/appsCall/appsCallApiFunctionality";
import { useDispatch, useSelector } from "react-redux";
import { createToken } from "../../../interfaces/interfaces";
import { useState } from "react";
import ModalsAddApps from "./ModalsAddApps";
import plusIcon from "../../../assets/img/plus.svg"
import { useTranslation } from "react-i18next";


declare global {
  interface Window {
      my_modal_2: {
        showModal: () => void;
      };
    }
}

const CreateApp = () => {
  const [t] = useTranslation();
  
  const dispatch = useDispatch();
  
  const { acces_token }: createToken = useSelector(
    (state: RootState) => state.apiPostRegister
  );
  
  const [newInfoApps, setNewInfoApps] = useState({
    title: "",
    description: "",
    url: "",
    state: "",
    github: "",
  });

  const sendInfo = () => {
    console.log(newInfoApps, acces_token, dispatch)
    postApiApps(newInfoApps, acces_token, dispatch);
  };

  return (
    <>
      <div className="mx-5 my-3">
        <button
        onClick={() => {
            window.my_modal_2?.showModal();
        }}
        className="flex w-full h-56 md:h-full justify-center items-center rounded-xl border-dashed border-2 border-[#7e7e7e]"
        >
        <img src={plusIcon} alt="+" className="w-6" />
        <p className="ml-2 font-bold text-[#7e7e7e]">{t("backofficePage.appsComponent.createButton.createButtonTitle")}</p>
        </button>
      </div>
    
      <ModalsAddApps
        newInfoApps={newInfoApps}
        setNewInfoApps={setNewInfoApps}
        sendInfo={sendInfo}
      />

    </>
  )
}

export default CreateApp