import { RootState } from "../../store/store";
import { createToken, ApiStateApps } from "../../interfaces/interfaces";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { apiCallApps, apiCallAppsInfo, postApiApps } from "../../store/reducers/appsCall/appsCallApiFunctionality";
import { useDispatch, useSelector } from "react-redux";
import ModalApps from "./appsAdminView/modalApps";
import ModalsAddApps from "./appsAdminView/ModalsAddApps";
import { deleteApiApps } from "../../store/reducers/appsCall/appsCallApiFunctionality";

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
    });
  
    const sendInfo = () => {
      postApiApps(newInfoApps, acces_token, dispatch);
    };

  return (
    <>
        {apps.map((app) => {
            return (
              <div
                className={`cards ${
                  app.state === "COMPLETED" && "bg-completed"
                } 
                ${app.state === "SOON" ? "bg-soon" : "bg-building"}
                card md:w-80 m-5 md:m-0 p-0   text-grey-it`}
              >
                <div className="card-body">
                  {window.location.pathname == "/backoffice" && (
                    <div className="flex place-content-end gap-2">
                      <button className="bg-white px-4 py-1" onClick={() => {window.my_modal_1?.showModal(); handleSendApiInfo(app.id); }}>Editar</button>
                      <button className="bg-white px-2 py-1" onClick={() => deleteApiApps(app.id, acces_token, dispatch)}>Eliminar</button>
                    </div>
                  )}
                  <h2 className="card-title">{app.title}</h2>
                  <p>{app.description}</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-block btn-outline bg-base-100 border-none normal-case gap-2">
                      Ir a app <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            );
        })}
        <ModalApps
        newInfoApps={newInfoApps}
        setNewInfoApps={setNewInfoApps}
        />
        <ModalsAddApps
        newInfoApps={newInfoApps}
        setNewInfoApps={setNewInfoApps}
        sendInfo={sendInfo}
        />
    </>
  )
}

export default Apps