import { RootState } from "../../store/store";
import { createToken, ApiStateApps } from "../../interfaces/interfaces";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { apiCallApps, apiCallAppsInfo, deleteApiApps } from "../../store/reducers/appsCall/appsCallApiFunctionality";
import { useDispatch, useSelector } from "react-redux";
import ModalApps from "./appsAdminView/modalApps";
import trashIcon from "../../assets/img/icon-delete-faq-backoffice.png"
import githubLogo from "../../assets/img/githubLogo.svg"
import { useTranslation } from "react-i18next";


declare global {
    interface Window {
      my_modal_1: {
        showModal: () => void;
      }
    }
  }

const Apps = () => {
  const { acces_token }: createToken = useSelector(
    (state: RootState) => state.apiPostRegister
    );
    
    const { apps }: ApiStateApps = useSelector(
      (state: RootState) => state.appsCallApiFunctionality
      );
      
    const [t] = useTranslation();
    const handleSendApiInfo = (id: number) => {
        apiCallAppsInfo(dispatch, id, acces_token);
    };

    const dispatch = useDispatch();

    useEffect(() => {
      apiCallApps(dispatch);
    }, []);
  
    const [newInfoApps, setNewInfoApps] = useState({
      title: "",
      description: "",
      url: "",
      state: "",
      github: "",
    });

  return (
    <>
        {apps.map((app) => {
            return (
              <div
                key={app.id}
                className={`cards ${
                  app.state === "COMPLETED" && "bg-completed"
                } 
                ${app.state === "SOON" ? "bg-soon" : "bg-building"}
                flex flex-col rounded-xl mx-5 my-3 min-h-[296px]`}
              >
                    {window.location.pathname === "/backoffice" && (
                        <div className="flex place-content-end gap-2">
                            <button className="bg-white px-4 py-1 mt-4" onClick={() => {window.my_modal_1?.showModal(); handleSendApiInfo(app.id); }}>{t("backofficePage.appsComponent.editButton.editButtonTitle")}</button>
                            <a className="flex mt-4 mr-4" onClick={() => deleteApiApps(app.id, acces_token, dispatch)}>
                                <img src={trashIcon} alt="eliminar" className="w-10" />
                            </a>
                        </div>
                    )}
                    {window.location.pathname === "/" && (
                        <a href={app.github} className="flex place-content-end px-4 py-1 mt-4" target="_blank">
                            <img src={githubLogo} alt="github_link" />
                        </a>
                    )}
                    <h2 className="text-start ml-6 text-xl font-bold">{app.title}</h2>
                    <p className="flex-grow text-left ml-4 mr-8 my-4 line-clamp-4 leading-7 text-[#7e7e7e]">{app.description}</p>
                    <a href={app.url} className="flex mb-4 mx-4 btn btn-outline bg-base-100 border-none normal-case" target="_blank">
                    {t("backofficePage.appsComponent.appLink")} <FaArrowRight />
                    </a>
              </div>
            );
        })}
        <ModalApps
        newInfoApps={newInfoApps}
        setNewInfoApps={setNewInfoApps}
        />
    </>
  )
}

export default Apps