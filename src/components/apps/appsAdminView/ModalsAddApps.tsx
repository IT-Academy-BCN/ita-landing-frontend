import { useState, useEffect } from "react";
import Cross from "../../../assets/img/cross.png";
import { useTranslation } from "react-i18next";
import { appInfo } from "../../../interfaces/interfaces";

export default function ModalsAddApps({
  newInfoApps,
  setNewInfoApps,
  sendInfo,
}: {
  newInfoApps: appInfo;
  setNewInfoApps: React.Dispatch<React.SetStateAction<appInfo>>;
  sendInfo: () => void;
}) {

  const [t] = useTranslation();
  const [errors, setErrors] = useState<any>({});

  const resetForm = () => {
    setNewInfoApps({
      title: "",
      description: "",
      url: "",
      github: "",
      state: "",
    });
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    const value = e.target.value;
    setNewInfoApps({ ...newInfoApps, [field]: value.trim() });
    setErrors((prevErrors: any) => ({ ...prevErrors, [field]: value.trim() === "" ? `This field is required!` : null }));
  };

  const isFormValid = () => {
    const hasErrors = Object.values(errors).some((error) => error !== null);
    return !hasErrors;
  };

  useEffect(() => {
    // clean errors
    setErrors({});
  }, [newInfoApps]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({
      title: newInfoApps.title.trim() === "" ? "This field is required!" : null,
      description: newInfoApps.description.trim() === "" ? "This field is required!" : null,
      url: newInfoApps.url.trim() === "" || !newInfoApps.url.trim().startsWith("https://") ? "URL is required and must start with 'https://'." : null,
      github: newInfoApps.github.trim() === "" || !newInfoApps.github.trim().startsWith("https://") ? "Github is required and must start with 'https://'." : null,
      state: newInfoApps.state.trim() === "" ? "This field is required!" : null,
    });

    if (isFormValid()) {
      try {
        sendInfo();
      } catch (error) {
        console.log(error);
      }
    }
  };


  // add state that shows or hide modal bc i cant close it.

  return (
    <dialog id="my_modal_2" className="modal">
      <form
        method="dialog"
        className="flex flex-col px-8 pt-5 pb-6 bg-white modal-box text-start min-h-5/6 "
        onSubmit={handleSubmit}
      >
        <button type="button" onClick={() => close()} className="ml-auto bg-transparent border-0 cursor-pointer focus:outline-none hover:bg-transparent">
          <img src={Cross} alt="Cross button" />
        </button>

        <input
          placeholder={t(
            "backofficePage.appsComponent.createButton.titleInput"
          )}
          onChange={(e) =>
            handleInputChange(e, "title")
          }
          className="mb-2 font-bold text-black focus:outline-none font-poppins"
          type="text"
        />
        {errors.title && <span className="text-red-500">{errors.title}</span>}

        <textarea
          rows={5}
          placeholder={t(
            "backofficePage.appsComponent.createButton.textDescription"
          )}
          onChange={(e) =>
            handleInputChange(e, "description")

          }
          className="overflow-y-auto pr-4 focus:outline-none mt-2 mb-2 w-full text-[#7e7e7e]"
        />
        {errors.description && <span className="text-red-500">{errors.description}</span>}

        <div className="my-2">
          <h3 className="font-bold text-base text-[#4F4F4F] mb-1.5">
            {t("backofficePage.appsComponent.createButton.urlProjectTitle")}
          </h3>
          <input
            placeholder={t(
              "backofficePage.appsComponent.createButton.inputText"
            )}
            onChange={(e) =>
              handleInputChange(e, "url")

            }
            type="text"
            className="w-full py-1 input input-bordered focus:outline-none"
          />
        {errors.url && <span className="text-red-500">{errors.url}</span>}

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
              handleInputChange(e, "github")

            }
            type="text"
            className="w-full py-1 input input-bordered focus:outline-none"
          />
        {errors.github && <span className="text-red-500">{errors.github}</span>}

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
        {errors.state && <span className="text-red-500">{errors.state}</span>}

        <div className="flex gap-5 mt-4 mb-0 place-content-center">
          <button className="btn text-sm font-bold rounded-xl xl:px-5 text-[#7e7e7e] border border-[#808080] bg-white" type="reset" 
          onClick={resetForm}>
            
            {t("backofficePage.appsComponent.createButton.closeButton")}
          </button>
          <button className="text-sm text-white normal-case btn rounded-xl xl:px-10 bg-pink-it hover:bg-pink-hover">
            {t("backofficePage.appsComponent.createButton.saveButton")}
          </button>
        </div>
      </form>
    </dialog>
  );
}
