import { useState } from "react";
import logo from "../assets/img/ITA_header_logo.png";
import selector from "../assets/img/sel_right.png";
import menu from "../assets/img/menu.svg";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./Registercomponent";
import PasswordReminderComponent from "./PasswordReminderComponent";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [IsDropdownEnterButton, setIsDropdownEnterButton] =
    useState<boolean>(false);
  const [isDropdownCuenta, setisDropdownCuenta] = useState<boolean>(false);
  const [isPasswordReminder, setIsPasswordReminder] = useState<boolean>(false);
  const [languageSelected, setLanguageSelected] = useState("catala");

  const handleChangeLanguageOfTheWebsite = (lang: string): void => {
    setLanguageSelected(lang);
    i18n.changeLanguage(lang);
  };

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  console.log(i18n.language);

  return (
    <header className="w-full z-10 absolute flex  justify-between  ">
      {/* Logo */}

      <div className="w-1/2 md:w-1/4 lg:w-auto ml-5 lg:ml-0 ">
        <img src={logo} alt="logo" className=" lg:w-1/2" />
      </div>

      {/* Idiomas + Botón Entrar (solo visibles en pantallas grandes) */}
      <div className=" flex  ">
        {/* Botón Desplegable Idiomas (solo visible en pantallas grandes) */}
        <div className="hidden lg:block relative mr-5 cursor-pointer">
          <button
            className="relative btn btn-outline btn-neutral h-full hover:bg-transparent border-gray-400 "
            onClick={toggleDropdown}
          >
            <div className="flex  items-center justify-between text-sm text-neutral font-bold text-gray-700 capitalize ">
              <span>
                {t(`landingPage.languagesSwitcher.${languageSelected}`)}
              </span>
              <div>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="chevron-down w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 13.292l-5.146-5.147a1 1 0 0 1 1.414-1.414L10 10.464l3.732-3.733a1 1 0 0 1 1.414 1.414L10 13.292z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Tabla Idiomas (links) (solo visible en pantallas grandes) */}
            <ul
              className={`absolute right-0 top-full mt-4 w-52 rounded-xl bg-white border-2  ${
                isDropdownOpen ? "" : "hidden"
              }`}
            >
              <li>
                <button
                  className="w-full py-4 flex items-center px-4 hover:bg-gray-100 hover:rounded-xl flex-row"
                  onClick={() => handleChangeLanguageOfTheWebsite("catala")}
                >
                  <div className="text-left flex-grow">
                    <div className="rounded-full h-53 w-53 flex items-left text-gray-700 font-bold text-sm capitalize whitespace-nowrap">
                      {t("landingPage.languagesSwitcher.catala")}
                    </div>
                  </div>
                </button>
              </li>
              <li>
                <button
                  className="w-full py-4 flex items-center px-4 hover:bg-gray-200 border-t border-gray-400 flex-row"
                  onClick={() => handleChangeLanguageOfTheWebsite("espanol")}
                >
                  <div className="text-left flex-grow">
                    <div className="rounded-full h-53 w-53 flex items-left text-gray-700 font-bold text-sm capitalize whitespace-nowrap">
                      {t("landingPage.languagesSwitcher.espanol")}
                    </div>
                  </div>
                </button>
              </li>
              <li>
                <button
                  className="w-full py-4 hover:rounded-b-xl flex items-center px-4 hover:bg-gray-200 border-t border-gray-400 flex-row"
                  onClick={() => handleChangeLanguageOfTheWebsite("english")}
                >
                  <div className="text-left flex-grow">
                    <div className="rounded-full h-53 w-53 flex items-left text-gray-700 font-bold text-sm capitalize whitespace-nowrap">
                      {t("landingPage.languagesSwitcher.english")}
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          </button>
        </div>

        {/* Botón Entrar (solo visible en pantallas grandes) */}
        <div className="hidden lg:block   ">
          <button
            onClick={() => {
              setIsDropdownOpen(false); setIsDropdownEnterButton(true);
            }}
            className="h-full flex btn btn-outline hover:bg-transparent hover:text-black"
          >
            <div>
              <img src={selector} className="h-5 w-5 mr-2" />
            </div>
            <span className="  font-bold capitalize  text-sm">
              {t("landingPage.loginModal.login")}
            </span>
          </button>
        </div>

        {IsDropdownEnterButton ? (
          <LoginComponent
            setIsDropdownEnterButton={setIsDropdownEnterButton}
            setisDropdownCuenta={setisDropdownCuenta}
            setIsPasswordReminder={setIsPasswordReminder}
          />
        ) : null}
        {isDropdownCuenta ? (
          <RegisterComponent
            setIsDropdownEnterButton={setIsDropdownEnterButton}
            setisDropdownCuenta={setisDropdownCuenta}
            setIsPasswordReminder={setIsPasswordReminder}
          />
        ) : null}

        {isPasswordReminder ? (
          <PasswordReminderComponent
            setIsPasswordReminder={setIsPasswordReminder}
            setIsDropdownEnterButton={setIsDropdownEnterButton}
            setisDropdownCuenta={setisDropdownCuenta}
          />
        ) : null}

        {/* Menú desplegable para pantallas pequeñas */}
        {/* <div className="flex-grow flex justify-end items-center"> */}
        <div
          className="lg:hidden m  flex-grow flex justify-end items-center"
          style={{ borderRadius: "10px" }}
        >
          <div
            className="cursor-pointer bg-transparent px-4 py-4 flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ borderRadius: "10px" }}
            onClick={toggleDropdown}
          >
            <div className="w-12 h-12">
              <img src={menu} className="h-full" />
            </div>
          </div>
          {/* </div> */}

          {/* Desplegable Idiomas + Administración (pantallas pequeñas) */}
          {isDropdownOpen && (
            <>
              <ul className=" z-50 lg:hidden justify-items-end bg-[#FFFF] absolute top-full  mt-16 mr-0 rounded-tl-xl rounded-bl-xl border-2 border-[#BDBDBD] ">
                <li className="flex items-center px-8 py-8 ml-4 mt-6 hover:bg-gray-200 flex-row text-[#7E7E7E]">
                  <div className="text-left flex-grow">
                    <div className="rounded-full h-53 w-53 flex items-left text-black font-bold text-2xl">
                      Idioma
                    </div>
                  </div>
                </li>
                <li className="flex items-center px-8 py-4 ml-4    cursor-pointer    lg:hover:bg-gray-200 flex-row">
                  <div className="text-left flex-grow ml-2 text-gray-600 text-2xl text-[#7E7E7E]">
                    <h3 className=" hover:border-b-4 hover:border-blue-800">
                      Català
                    </h3>
                  </div>
                </li>
                <li className="flex items-center px-8 py-2 ml-4 lg:hover:bg-gray-200 flex-row cursor-pointer">
                  <div className="text-left flex-grow ml-2 text-gray-600 text-2xl text-[#7E7E7E]">
                    <h3 className=" hover:border-b-4 hover:border-blue-800">
                      Castellano
                    </h3>
                  </div>
                </li>
                <li className="flex items-center px-8 py-2 ml-4 lg:hover:bg-gray-200 flex-row cursor-pointer">
                  <div className="text-left flex-grow ml-2 text-gray-600 text-2xl text-[#7E7E7E]">
                    <h3 className=" hover:border-b-4 hover:border-blue-800">
                      English
                    </h3>
                  </div>
                </li>
                <li className="flex items-center px-8 py-8 ml-4 mr-8 mt-6 hover:bg-gray-200 flex-row">
                  <div className="text-left flex-grow">
                    <div className="rounded-full h-53 w-53 flex items-left text-black font-bold text-2xl text-[#7E7E7E]">
                      Administración
                    </div>
                  </div>
                </li>
                {/* Botón Entrar pantallas pequeñas */}
                <li>
                  <button
                    className="bg-transparent transparent px-4 py-2 ml-12 mb-8 mt-0 flex items-center"
                    style={{ borderRadius: "10px", border: "1px solid black" }}
                  >
                    <div className="ml-2 mt-4 mb-4">
                      <img src={selector} className="h-8 w-8" />
                    </div>
                    <span className="text-black font-bold ml-6 mr-16 mt-4 mb-4 text-2xl text-[#1E1E1E]">
                      Entrar
                    </span>
                  </button>
                </li>
              </ul>

              <div
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
                className="opacity-25 fixed inset-0 z-40 bg-black"
              ></div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
