import angularLogo from "../assets/img/angular.png";
import phpLogo from "../assets/img/php.png";
import javaLogo from "../assets/img/java.png";
import pythonLogo from "../assets/img/python.png";
import reactLogo from "../assets/img/react.png";
import nodejsLogo from "../assets/img/nodejs.png";
import CardComponent from "./CardComponent";
import ImgVector from "../assets/img/curved-arrow.png";
import { useTranslation } from "react-i18next";

const TeamSectionComponent = () => {
  const [t] = useTranslation();
  return (
    <div>
    <div className="flex flex-col items-center justify-center mb-20 ">
      <div className="grid grid-cols-5 ">
        <img style={{ gridColumn: "5" }} src={ImgVector}></img>
      </div>

      <h1 className="text-4xl font-bold leading-58 ">
        {t("landingPage.teamComponent.title")}
      </h1>
      <h3 className="mt-5 text-base font-medium text-gray-600 font-poppins">
        {t("landingPage.teamComponent.description")}
      </h3>
    </div>

    <div className="container flex flex-wrap items-center justify-center mx-auto">
      <CardComponent
        pos={"01"}
        imgSrc1={reactLogo}
        imgSrc2={nodejsLogo}
        title={"React & Node"}
        description={
          "L’alumnat de Node i de React treballa de forma conjunta per desenvolupar i mantenir els aplicatius que tinguin assignats."
        }
      />
      <CardComponent
        pos={"02"}
        imgSrc1={angularLogo}
        imgSrc2={javaLogo}
        title={"Angular & Java"}
        description={
          "L’alumnat de Java i de Angular treballa de forma conjunta per desenvolupar i mantenir els aplicatius que tinguin assignats."
        }
      />
      <CardComponent
        pos={"03"}
        imgSrc1={phpLogo}
        title={"PHP & React"}
        description={
          "L’alumnat de PHP i de React treballa de forma conjunta per desenvolupar i mantenir els aplicatius que tinguin assignats."
        }
      />
      <CardComponent
        pos={"04"}
        imgSrc1={pythonLogo}
        title={"Data Science"}
        description={
          "L’alumnat de Data Science treballa de forma conjunta per desenvolupar i mantenir els aplicatius que tinguin assignats."
        }
      />
    </div>
  </div>
  )
}

export default TeamSectionComponent
