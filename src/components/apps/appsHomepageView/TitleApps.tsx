import curvedArrow from "../../../assets/img/curvedArrow.svg";
import { useTranslation } from "react-i18next";

const TitleApps = () => {
  const [t] = useTranslation();
  return (
    <div className="grid grid-cols-4 grid-rows-1">
      <img
        className="h-[44px] mr-24 place-self-end md:p-0 pl-14"
        src={curvedArrow}
      ></img>

      <h2 className="font-bold text-4xl text-center col-span-6">
        {t("landingPage.appsComponent.title")}
      </h2>
    </div>
  );
};

export default TitleApps;
