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
    <dialog id="my_modal_2" className="modal">
      <form
        method="dialog"
        className="flex flex-col px-8 pt-5 pb-6 bg-white modal-box text-start min-h-5/6"
      >
        <button className="ml-auto bg-transparent border-0 cursor-pointer focus:outline-none hover:bg-transparent">
          <img src={Cross} alt="Cross button" />
        </button>

        <input
          placeholder={t(
            "backofficePage.appsComponent.createButton.titleInput"
          )}
          onChange={(e) =>
            setNewInfoApps({ ...newInfoApps, title: e.target.value })
          }
          className="mb-2 font-bold text-black focus:outline-none font-poppins"
          type="text"
        />

        <textarea
          rows={5}
          placeholder={t(
            "backofficePage.appsComponent.createButton.textDescription"
          )}
          onChange={(e) =>
            setNewInfoApps({ ...newInfoApps, description: e.target.value })
          }
          className="overflow-y-auto pr-4 focus:outline-none mt-2 mb-2 w-full text-[#7e7e7e]"
        />

        <div className="my-2">
          <h3 className="font-bold text-base text-[#4F4F4F] mb-1.5">
            {t("backofficePage.appsComponent.createButton.urlProjectTitle")}
          </h3>
          <input
            placeholder={t(
              "backofficePage.appsComponent.createButton.inputText"
            )}
            onChange={(e) =>
              setNewInfoApps({ ...newInfoApps, url: e.target.value })
            }
            type="text"
            className="w-full py-1 input input-bordered focus:outline-none"
          />
        </div>

        <div className="my-2">
          <h3 className="font-bold text-base text-[#4F4F4F] mb-1.5">
            {t("backofficePage.appsComponent.createButton.urlGitHubTitle")}
          </h3>
          <input
            placeholder={t(
              "backofficePage.appsComponent.createButton.inputText"
            )}
            onChange={(e) =>
              setNewInfoApps({ ...newInfoApps, github: e.target.value })
            }
            type="text"
            className="w-full py-1 input input-bordered focus:outline-none"
          />
        </div>

        <h3 className="font-bold text-base text-[#4F4F4F] mt-2 mb-1.5">
          {t("backofficePage.appsComponent.createButton.state")}
        </h3>
        <div className="flex w-fit rounded-full p-1 mb-4 border border-[#BDBDBD]">
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
            {t("backofficePage.appsComponent.createButton.status.finished")}
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
            {t("backofficePage.appsComponent.createButton.status.construction")}
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
            {t("backofficePage.appsComponent.createButton.status.soon")}
          </button>
        </div>

        <div className="flex gap-5 mt-4 mb-0 place-content-center">
          <button className="text-sm font-bold rounded-xl xl:px-5 text-[#7e7e7e] border border-[#808080] bg-white">
            {t("backofficePage.appsComponent.createButton.closeButton")}
          </button>
          <button
            className="text-sm text-white normal-case btn rounded-xl xl:px-10 bg-pink-it hover:bg-pink-hover"
            onClick={sendInfo}
          >
            {t("backofficePage.appsComponent.createButton.saveButton")}
          </button>
        </div>
      </form>
    </dialog>
  );
}
