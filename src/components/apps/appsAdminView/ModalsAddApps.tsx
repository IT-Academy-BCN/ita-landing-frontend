import Cross from "../../../assets/img/cross.png";
import { useTranslation } from "react-i18next";

export default function ModalsAddApps({
  newInfoApps,
  setNewInfoApps,
  sendInfo,
}: {
  newInfoApps: any;
  setNewInfoApps: any;
  sendInfo: any;
}) {
  const [t] = useTranslation();
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box bg-white flex flex-col text-start min-h-5/6">
          <button className="cursor-pointer bg-transparent ml-auto border-0 focus:outline-none hover:bg-transparent">
            <img src={Cross} alt="Cross button" />
          </button>

          <input
            placeholder={t("backofficePage.appsComponent.createButton.titleInput")}
            onChange={(e) =>
              setNewInfoApps({ ...newInfoApps, title: e.target.value })
            }
            className="focus:outline-none mb-2 text-black font-poppins font-bold"
            type="text"
          />

          <textarea
            placeholder={t("backofficePage.appsComponent.createButton.textDescription")}
            onChange={(e) =>
              setNewInfoApps({ ...newInfoApps, description: e.target.value })
            }
            className="overflow-y-auto pr-4 focus:outline-none mt-2 mb-4 w-full text-[#7e7e7e]"
          />

          <div className="my-3">
            <h3 className="font-bold text-base text-[#4F4F4F] mb-2">{t("backofficePage.appsComponent.createButton.urlProjectTitle")}</h3>
            <input
              placeholder={t("backofficePage.appsComponent.createButton.inputText")}
              onChange={(e) =>
                setNewInfoApps({ ...newInfoApps, url: e.target.value })
              }
              type="text"
              className="input border-[#BDBDBD] focus:outline-none w-full py-2"
            />
          </div>

          <div className="my-3">
            <h3 className="font-bold text-base text-[#4F4F4F] mb-2">{t("backofficePage.appsComponent.createButton.urlGitHubTitle")}</h3>
            <input
              placeholder={t("backofficePage.appsComponent.createButton.inputText")}
              onChange={(e) =>
                setNewInfoApps({ ...newInfoApps, github: e.target.value })
              }
              type="text"
              className="input border-[#BDBDBD] focus:outline-none w-full py-2"
            />
          </div>

          <h3 className="font-bold text-base text-[#4F4F4F] mt-2 mb-3">{t("backofficePage.appsComponent.createButton.state")}</h3>
          <div className="flex w-fit rounded-full p-1 mb-4 border  border-[#BDBDBD]">
            <p
              onClick={() => { setNewInfoApps({ ...newInfoApps, state: "COMPLETED" })}}
              className={`
                ${newInfoApps.state == "COMPLETED"
                  ? "font-bold bg-completed rounded-full p-3 cursor-pointer"
                  : "cursor-pointer p-3"
                } text-sm`}
            >
              {t("backofficePage.appsComponent.createButton.status.finished")}
            </p>
            <p
              onClick={() => {setNewInfoApps({ ...newInfoApps, state: "IN PROGRESS" })}}
              className={`
                ${newInfoApps.state == "IN PROGRESS"
                  ? "font-bold bg-building ml-2 rounded-full p-3 cursor-pointer"
                  : "cursor-pointer p-3 ml-2"
                } text-sm`}
            >
              {t("backofficePage.appsComponent.createButton.status.construction")}
            </p>
            <p
              onClick={() => {setNewInfoApps({ ...newInfoApps, state: "SOON" })}}
              className={`
                ${newInfoApps.state == "SOON"
                  ? "font-bold bg-soon ml-2 rounded-full p-3 cursor-pointer"
                  : "cursor-pointer p-3 ml-2"
                } text-sm`}
            >
              {t("backofficePage.appsComponent.createButton.status.soon")}
            </p>
          </div>

          <div className="flex place-content-center mt-5 mb-2 gap-5">
            <button className="text-base rounded-xl xl:px-7 text-[#7e7e7e] border border-[#808080] bg-white">{t("backofficePage.appsComponent.createButton.closeButton")}</button>
            <button className="btn normal-case rounded-xl xl:px-12 text-white bg-pink-it hover:bg-pink-hover" onClick={sendInfo}>{t("backofficePage.appsComponent.createButton.saveButton")}</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
