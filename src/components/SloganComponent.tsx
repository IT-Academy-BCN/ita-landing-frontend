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
      <div className="relative flex justify-center m-auto background-image-style mt-5 ">
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
                    <button
                      className="cursor-pointer flex items-center justify-start"
                      onClick={() => setIsPopupOpen(true)}
                    >
                      <ButtonCollaborate onClick={openPopup} />
                    </button>
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
              className="xl:w-28 ml-8"
              src={angularLogo}
              alt="Angular Logo"
            ></img>
            <img
              className="xl:w-28 pt-20"
              src={reactLogo}
              alt="React Logo"
            ></img>

            <img className="xl:w-28" src={phpLogo} alt="PHP Logo"></img>
            <img className="xl:w-24 ml-8" src={javaLogo} alt="Java Logo"></img>
            <img
              className="  xl:w-28 justify-self-center pt-12"
              src={nodejsLogo}
              alt="Nodejs Logo"
            ></img>
            <img
              className="  xl:w-28  justify-self-end pr-5  "
              src={pythonLogo}
              alt="Python Logo"
            ></img>
            <img
              className="  xl:w-28 justify-self-end place-self-end mb-8"
              src={gitLogo}
              alt="Scrum Logo"
            ></img>
            <img
              className="  xl:w-28    justify-self-end  "
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
