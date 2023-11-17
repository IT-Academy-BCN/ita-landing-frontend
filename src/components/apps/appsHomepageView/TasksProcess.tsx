import { FaRegCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";

const TasksProcess = () => {
  const [t] = useTranslation();
  return (
    <div className="flex flex-col md:flex-row justify-center my-6 gap-4">
      <div className="flex justify-center items-center gap-2">
        <IconContext.Provider
          value={{ color: "#bedfc8", className: "global-class-name" }}
        >
          <FaRegCircle />
          {t("landingPage.appsComponent.status.finished")}
        </IconContext.Provider>
      </div>
      <div className="flex justify-center items-center gap-2">
        <IconContext.Provider
          value={{ color: "#f8e9b9", className: "global-class-name" }}
        >
          <FaRegCircle />
          {t("landingPage.appsComponent.status.construction")}
        </IconContext.Provider>
      </div>
      <div className="flex justify-center items-center gap-2">
        <IconContext.Provider
          value={{ color: "#f7cbc4", className: "global-class-name" }}
        >
          <FaRegCircle />
          {t("landingPage.appsComponent.status.soon")}
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default TasksProcess;
