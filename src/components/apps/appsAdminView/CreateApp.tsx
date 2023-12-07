import ModalsAddApps from "./ModalsAddApps";
import plusIcon from "../../../assets/img/plus.svg";
import { useTranslation } from "react-i18next";

const CreateApp = () => {
  const [t] = useTranslation();

  return (
    <>
      <div className="mx-3 my-3">
        <button
          onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal_2") as HTMLFormElement
              ).showModal();
            }
          }}
          className="flex w-full min-h-[309px] md:h-full justify-center items-center rounded-xl border-dashed border-2 border-[#7e7e7e]"
        >
          <img src={plusIcon} alt="+" className="w-6" />
          <p className="ml-2 font-bold text-base text-[#7e7e7e]">
            {t("backofficePage.appsComponent.createButton.createButtonTitle")}
          </p>
        </button>
      </div>

      <ModalsAddApps />
    </>
  );
};

export default CreateApp;
