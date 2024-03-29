import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { putApiApps } from "../../../store/reducers/appsCall/appsCallApiFunctionality";
import Cross from "../../../assets/img/cross.png";
import { createToken } from "../../../interfaces/interfaces";
import { useTranslation } from "react-i18next";

export default function ModalApps({
  newInfoApps,
  setNewInfoApps,
}: {
  newInfoApps: any;
  setNewInfoApps: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const { acces_token }: createToken = useSelector(
    (state: RootState) => state.apiPostRegister
  );

  const { appsInfo, loadingApps }: any = useSelector(
    (state: RootState) => state.appsCallApiFunctionality
  );

  useEffect(() => {
    setNewInfoApps((prevInfoApps: object) => ({
      ...prevInfoApps,
      title: appsInfo.title,
      description: appsInfo.description,
      url: appsInfo.url,
      github: appsInfo.github,
      state: appsInfo.state,
      id: appsInfo.id,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appsInfo]);

  return (
    <dialog id="my_modal_1" className="modal ">
      {!loadingApps ? (
        <form
          method="dialog"
          className="flex flex-col px-8 pt-5 pb-6 bg-white modal-box text-start min-h-5/6"
        >
          <button className="ml-auto bg-transparent border-0 cursor-pointer focus:outline-none hover:bg-transparent">
            <img src={Cross} alt="Cross button" />
          </button>

          <input
            value={newInfoApps.title}
            onChange={(e) =>
              setNewInfoApps({ ...newInfoApps, title: e.target.value })
            }
            className="mb-2 font-bold text-black focus:outline-none font-poppins"
            type="text"
          />

          <textarea
            rows={5}
            value={newInfoApps.description}
            onChange={(e) =>
              setNewInfoApps({ ...newInfoApps, description: e.target.value })
            }
            className="overflow-y-auto pr-4 focus:outline-none mt-2 mb-2 w-full text-[#7e7e7e]"
          />

          <div className="my-2">
            <h3 className="font-bold text-base mb-1.5">
              {t("backofficePage.appsComponent.editButton.urlProjectTitle")}
            </h3>
            <input
              placeholder={t(
                "backofficePage.appsComponent.editButton.inputText"
              )}
              value={newInfoApps.url}
              onChange={(e) =>
                setNewInfoApps({ ...newInfoApps, url: e.target.value })
              }
              type="text"
              className="w-full py-1 input input-bordered focus:outline-none"
            />
          </div>

          <div className="my-2">
            <h3 className="font-bold text-base mb-1.5">
              {t("backofficePage.appsComponent.editButton.urlGitHubTitle")}
            </h3>
            <input
              placeholder={t(
                "backofficePage.appsComponent.editButton.inputText"
              )}
              value={newInfoApps.github}
              onChange={(e) =>
                setNewInfoApps({ ...newInfoApps, github: e.target.value })
              }
              type="text"
              className="w-full py-1 input input-bordered focus:outline-none"
            />
          </div>

          <h3 className="font-bold mt-1 mb-1.5">
            {t("backofficePage.appsComponent.editButton.state")}
          </h3>
          <div className="flex p-1 mb-2 border rounded-full w-fit">
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewInfoApps({ ...newInfoApps, state: "COMPLETED" });
              }}
              className={`
                  ${
                    newInfoApps.state == "COMPLETED"
                      ? "font-bold bg-completed rounded-full p-3 cursor-pointer"
                      : "cursor-pointer p-3"
                  } text-sm`}
            >
              {t("backofficePage.appsComponent.editButton.status.finished")}
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewInfoApps({ ...newInfoApps, state: "IN PROGRESS" });
              }}
              className={`
                  ${
                    newInfoApps.state == "IN PROGRESS"
                      ? "font-bold bg-building ml-2 rounded-full p-3 cursor-pointer"
                      : "cursor-pointer p-3 ml-2"
                  } text-sm`}
            >
              {t("backofficePage.appsComponent.editButton.status.construction")}
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewInfoApps({ ...newInfoApps, state: "SOON" });
              }}
              className={`
                  ${
                    newInfoApps.state == "SOON"
                      ? "font-bold bg-soon ml-2 rounded-full p-3 cursor-pointer"
                      : "cursor-pointer p-3 ml-2"
                  } text-sm`}
            >
              {t("backofficePage.appsComponent.editButton.status.soon")}
            </button>
          </div>

          <div className="flex gap-5 mt-4 mb-0 place-content-center">
            <button className="text-sm font-bold rounded-xl xl:px-5 text-[#7e7e7e] border border-[#808080] bg-white">
              {t("backofficePage.appsComponent.editButton.closeButton")}
            </button>
            <button
              className="text-sm text-white normal-case btn rounded-xl xl:px-7 bg-pink-it hover:bg-pink-hover"
              onClick={() =>
                putApiApps(newInfoApps, acces_token, dispatch, appsInfo.id)
              }
            >
              {t("backofficePage.appsComponent.editButton.saveButton")}
            </button>
          </div>
        </form>
      ) : (
        <span className=" loading loading-spinner loading-lg"></span>
      )}
    </dialog>
  );
}
