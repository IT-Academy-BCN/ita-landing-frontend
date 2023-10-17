import angularLogo from "../assets/img/angular.png";
import phpLogo from "../assets/img/php.png";
import javaLogo from "../assets/img/java.png";
import pythonLogo from "../assets/img/python.png";
import reactLogo from "../assets/img/react.png";
import nodejsLogo from "../assets/img/nodejs.png";
import CardComponent from "./CardComponent";
import ImgVector from "../assets/img/curved-arrow.png";

const TeamsectionComponent = () => (
  <div>
    <div className="flex flex-col items-center justify-center mb-12 mb-20 ">
      <div className="grid grid-cols-5 ">
        <img style={{ gridColumn: "5" }} src={ImgVector}></img>
      </div>

      <h1 className="font-bold text-4xl leading-58  ">
        Equipos de trabajo
      </h1>
      <h3 className="font-poppins font-medium text-base text-gray-600 mt-5">
        Los proyectos son realizados por equipos que combinan las siguientes
        tecnologías
      </h3>
    </div>

    <div className="flex flex-wrap items-center justify-center container mx-auto">
      <CardComponent
        pos={"01"}
        imgSrc1={reactLogo}
        imgSrc2={nodejsLogo}
        title={"React & Node"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam pellentesque dignissim interdum feugiat tortor ut.\nVelitbus vulputate neque lacinia faucibus blandit diam parturient luctus."
        }
      />
      <CardComponent
        pos={"02"}
        imgSrc1={angularLogo}
        imgSrc2={javaLogo}
        title={"Angular & Java"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam pellentesque dignissim interdum feugiat tortor ut.\nVelitbus vulputate neque lacinia faucibus blandit diam parturient luctus."
        }
      />
      <CardComponent
        pos={"03"}
        imgSrc1={phpLogo}
        title={"PHP"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam pellentesque dignissim interdum feugiat tortor ut.\nVelitbus vulputate neque lacinia faucibus blandit diam parturient luctus."
        }
      />
      <CardComponent
        pos={"04"}
        imgSrc1={pythonLogo}
        title={"Data Science"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam pellentesque dignissim interdum feugiat tortor ut.\nVelitbus vulputate neque lacinia faucibus blandit diam parturient luctus."
        }
      />
    </div>
  </div>
);

export default TeamsectionComponent;
