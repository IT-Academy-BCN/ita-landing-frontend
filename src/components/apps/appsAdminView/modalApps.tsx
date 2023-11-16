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
    <>
      <dialog id="my_modal_1" className="modal ">
        {!loadingApps ? (
          <form method="dialog" className="modal-box bg-white text-start flex flex-col h-4/5">
            <button className="cursor-pointer bg-transparent ml-auto border-0 focus:outline-none hover:bg-transparent">
              <img src={Cross} alt="Cross button" />
            </button>

            <input
              value={newInfoApps.title}
              onChange={(e) =>
                setNewInfoApps({ ...newInfoApps, title: e.target.value })
              }
              className="focus:outline-none mb-2 text-black font-poppins font-bold"
              type="text"
            />

            <textarea
              value={newInfoApps.description}
              onChange={(e) =>
                setNewInfoApps({ ...newInfoApps, description: e.target.value })
              }
              className="focus:outline-none mt-2 mb-4 w-full text-[#7e7e7e]"
            />

            <div className="my-2">
              <h3 className="font-bold text-base text-[#4F4F4F] mb-1">{t("backofficePage.appsComponent.editButton.urlProjectTitle")}</h3>
              <input
                placeholder={t("backofficePage.appsComponent.editButton.inputText")}
                value={newInfoApps.url}
                onChange={(e) =>
                  setNewInfoApps({ ...newInfoApps, url: e.target.value })
                }
                type="text"
                className="input input-bordered w-full  py-2   "
              />
            </div>

            <div className="my-4">
              <h3 className="font-bold text-base mb-1">{t("backofficePage.appsComponent.editButton.urlGitHubTitle")}</h3>
              <input
                placeholder={t("backofficePage.appsComponent.editButton.inputText")}
                value={newInfoApps.github}
                onChange={(e) =>
                  setNewInfoApps({ ...newInfoApps, github: e.target.value })
                }
                type="text"
                className="input input-bordered w-full py-2"
              />
            </div>

            <h3 className="font-bold mt-2 mb-3">{t("backofficePage.appsComponent.editButton.state")}</h3>
            <div className="flex w-fit rounded-full p-1 border border-[#7e7e7e]">
              <p
                onClick={() => {
                  setNewInfoApps({ ...newInfoApps, state: "COMPLETED" });
                }}
                className={`
                  ${newInfoApps.state == "COMPLETED"
                    ? "font-bold bg-completed rounded-full p-3 cursor-pointer"
                    : "cursor-pointer p-3"
                } text-sm`}
              >
                {t("backofficePage.appsComponent.editButton.status.finished")}
              </p>
              <p
                onClick={() => {
                  setNewInfoApps({ ...newInfoApps, state: "IN PROGRESS" });
                }}
                className={`
                  ${newInfoApps.state == "IN PROGRESS"
                    ? "font-bold bg-building ml-2 rounded-full p-3 cursor-pointer"
                    : "cursor-pointer p-3 ml-2"
                } text-sm`}
              >
                {t("backofficePage.appsComponent.editButton.status.construction")}
              </p>
              <p
                onClick={() => {
                  setNewInfoApps({ ...newInfoApps, state: "SOON" });
                }}
                className={`
                  ${newInfoApps.state == "SOON"
                    ? "font-bold bg-soon ml-2 rounded-full p-3 cursor-pointer"
                    : "cursor-pointer p-3 ml-2"
                } text-sm`}
              >
                {t("backofficePage.appsComponent.editButton.status.soon")}
              </p>
            </div>

            <div className="flex place-content-center mt-6 gap-12">
              <button className="btn normal-case xl:px-12 text-[#7e7e7e] border border-[#7e7e7e] bg-white">{t("backofficePage.appsComponent.editButton.closeButton")}</button>
              <button className="btn normal-case xl:px-12 text-white bg-pink-it hover:bg-pink-hover"
                onClick={() =>
                  putApiApps(newInfoApps, acces_token, dispatch, appsInfo.id)
                }
              >
                {t("backofficePage.appsComponent.editButton.saveButton")}
              CLOSED</button>
            </div>
          </form>
        ) : (
          <span className=" loading loading-spinner loading-lg "></span>
        )}
      </dialog>
    </>
  );
}
