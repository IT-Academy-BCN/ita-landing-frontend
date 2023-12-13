import { RootState } from "../../store/store";
import { createToken, ApiStateApps } from "../../interfaces/interfaces";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  apiCallApps,
  apiCallAppsInfo,
  deleteApiApps,
} from "../../store/reducers/appsCall/appsCallApiFunctionality";
import { useDispatch, useSelector } from "react-redux";
import ModalApps from "./appsAdminView/modalApps";
import trashIcon from "../../assets/img/icon-delete-faq-backoffice.png";
import githubLogo from "../../assets/img/githubLogo.svg";
import { useTranslation } from "react-i18next";

declare global {
  interface Window {
    my_modal_1: {
      showModal: () => void;
    };
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
            className={`cards ${app.state === "COMPLETED" && "bg-completed"} 
                ${app.state === "SOON" ? "bg-soon" : "bg-building"}
                flex flex-col rounded-xl mx-3 my-3 min-h-[309px]`}
          >
            {/* Botones editar/eliminar superior */}
            {window.location.pathname === "/backoffice" && (
              <div className="flex gap-2 place-content-end h-11">
                <button
                  className="px-4 mt-3 text-sm font-semibold bg-white rounded-lg base-content"
                  onClick={() => {
                    window.my_modal_1?.showModal();
                    handleSendApiInfo(app.id);
                  }}
                >
                  {t("backofficePage.appsComponent.editButton.editButtonTitle")}
                </button>
                <a
                  className="flex mt-3 mr-4"
                  onClick={() => deleteApiApps(app.id, acces_token, dispatch)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter")
                      deleteApiApps(app.id, acces_token, dispatch);
                  }}
                >
                  <img src={trashIcon} alt="eliminar" className="w-10" />
                </a>
              </div>
            )}
            {window.location.pathname === "/" && (
              <a
                href={app.github}
                className="flex px-4 py-1 mt-4 place-content-end"
                target="_blank"
              >
                <img src={githubLogo} alt="github_link" />
              </a>
            )}
            <h2 className="text-start mt-0 mb-1 mx-6 text-lg font-bold text-[#1C1C1E]">
              {app.title}
            </h2>
            <p className="flex-grow text-left ml-6 mr-6 mt-1 mb-3 line-clamp-4 leading-relaxed text-base text-[#7e7e7e] overflow-y-auto pr-4">
              {app.description}
            </p>
            <a
              href={app.url}
              className="flex mb-5 mx-5 my-1 btn text-[#1C1C1E] font-bold bg-white border-none normal-case rounded-lg hover:text-black"
              target="_blank"
            >
              {t("backofficePage.appsComponent.appLink")} <FaArrowRight />
            </a>
          </div>
        );
      })}
      <ModalApps newInfoApps={newInfoApps} setNewInfoApps={setNewInfoApps} />
    </>
  );
};

export default Apps;
