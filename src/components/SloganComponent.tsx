import { useState } from "react";
import PopupHowToCollaborate from "./PopupHowToCollaborate";
import ButtonCollaborate from "./ButtonCollaborate";
import angularLogo from "../assets/img/angular.png";
import phpLogo from "../assets/img/php.png";
import javaLogo from "../assets/img/java.png";
import pythonLogo from "../assets/img/python.png";
import reactLogo from "../assets/img/react.png";
import scrumLogo from "../assets/img/scrum.png";
import nodejsLogo from "../assets/img/nodejs.png";
import gitLogo from "../assets/img/git.png";
import itacademyLogo from "../assets/img/itacademylogo.png";
import HeaderComponent from "./HeaderComponent";
import { useTranslation } from "react-i18next";

const SloganComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [t] = useTranslation();

  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="relative flex justify-center m-auto  my-5 mb-8 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1376 772"
          fill="none"
          className="bg-svg"
        >
          <path
            d="M36.5687 78.8927C8.57015 79.8101 -0.929365 92.1944 0.0705838 111V739.485C0.0705838 765.629 21.0695 771.592 36.5687 771.592C60.0675 771.592 1094.51 772.51 1118.01 771.592C1141.51 770.675 1154.01 766.547 1154.01 733.981C1154.01 701.414 1172.01 696.828 1194.51 696.828H1339C1371.5 696.828 1376 678.022 1376 659.216V111.918C1376 83.0208 1359.5 78.8927 1331 78.8927H1115.51C1071.02 78.8927 1055.52 73.3886 1055.52 38.529C1055.52 3.66943 1031.52 0 1012.02 0H309.059C274.061 0 270.061 20.6405 270.061 38.529C270.061 56.4175 264.062 78.8927 231.063 78.8927C198.065 78.8927 64.5673 77.9753 36.5687 78.8927Z"
            fill="#F0F0F0"
          />
        </svg>
        <HeaderComponent />
        <div className="overlay flex justify-center ml-8 lg:ml-0 lg:flex lg:mt-32">
          <div className="lg:w-1/2  text-center justify-center pt-36 lg:pt-16  lg:pl-16">
            <div className="font-black text-4xl lg:text-5xl text-left mr-8 lg:mr-16 leading-tight">
              <p>{t("landingPage.title")}</p>
            </div>

            <div className="lg:invisible  lg:h-0  mt-[45px]">
              <div className="flex  items-center justify-between md:justify-evenly">
                <img
                  className="h-14 "
                  src={angularLogo}
                  alt="Angular Logo"
                ></img>
                <img className="h-14" src={reactLogo} alt="React Logo"></img>
                <img className="h-14" src={nodejsLogo} alt="Nodejs Logo"></img>
                <img className="h-14" src={pythonLogo} alt="Python Logo"></img>
                <img className="h-14" src={phpLogo} alt="PHP Logo"></img>
              </div>
              <div className="flex items-center justify-evenly">
                <img className="h-14" src={javaLogo} alt="Java Logo"></img>
                <img className="h-14" src={gitLogo} alt="Git Logo"></img>
                <img className="h-14" src={scrumLogo} alt="Scrum Logo"></img>
              </div>
            </div>

            <div className="mt-16">
              <div className="w-96 md:w-full lg:w-3/4">
                <div className="text-start ">
                  {/*<img className="absolute mr-[18px]" src="{{ asset('img/Ellipse.png') }}" alt=""></img>
                            <img className="absolute  ml-2 mr-[18px]" src="{{ asset('img/Vector.png') }}" alt=""></img>*/}
                  <div className="font-black">
                    <p
                      className="cursor-pointer flex items-center justify-start"
                      onClick={() => setIsPopupOpen(true)}
                    >
                      <ButtonCollaborate onClick={openPopup} />
                    </p>
                  </div>
                </div>
                <div className="mt-7">
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full lg:w-96 border-b border-gray-900"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 mr-8 w-full lg:w-96 text-left">
                  <p>{t("landingPage.descriptionHeader")}</p>
                </div>
              </div>

              <div className="flex  me-auto">
                <img
                  className=" mt-10 ms-auto block lg:hidden   "
                  src={itacademyLogo}
                  alt="IT Academy Logo"
                ></img>
              </div>
            </div>
          </div>

          <div
            id="logos-section"
            className="lg:w-1/2 w-0   lg:visible invisible   grid  grid-cols-3      "
          >
            <img
              className="  xl:w-32 ml-5   "
              src={angularLogo}
              alt="Angular Logo"
            ></img>
            <img
              className="  xl:w-32  pt-20    "
              src={reactLogo}
              alt="React Logo"
            ></img>

            <img className="  xl:w-32    " src={phpLogo} alt="PHP Logo"></img>
            <img className="  xl:w-32    " src={javaLogo} alt="Java Logo"></img>
            <img
              className="  xl:w-32 justify-self-center pt-12   "
              src={nodejsLogo}
              alt="Nodejs Logo"
            ></img>
            <img
              className="  xl:w-32  justify-self-end pr-5  "
              src={pythonLogo}
              alt="Python Logo"
            ></img>
            <img
              className="  xl:w-32   justify-self-end place-self-end   "
              src={gitLogo}
              alt="Scrum Logo"
            ></img>
            <img
              className="  xl:w-32    justify-self-end  "
              src={scrumLogo}
              alt="Scrum Logo"
            ></img>

            <img
              className="  lg:place-self-end  "
              src={itacademyLogo}
              alt="IT Academy Logo"
            ></img>
          </div>
        </div>
      </div>
      {isPopupOpen && <PopupHowToCollaborate onClose={closePopup} />}
    </>
  );
};

export default SloganComponent;
