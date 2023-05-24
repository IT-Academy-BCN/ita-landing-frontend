import React, { useState } from "react";
import logo from "../images/ITA_header_logo.png";
import castellano from "../images/castellano.png";
import catala from "../images/catala.png";
import english from "../images/english.png";
import selector from "../images/sel_right.png";
import menu from "../images/menu.png";
import LoginModal from "./LoginRegisterSection/LoginModal";
import RegistrationModal from "./LoginRegisterSection/RegistrationModal";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-4 left-3 right-3 z-50 bg-transparent flex justify-between items-center py-4 px-6">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="scale-90" />
      </div>

      {/* Idiomas + Botón Entrar (solo visibles en pantallas grandes) */}
      <div className="flex-grow flex justify-end items-center">
        {/* Botón Desplegable Idiomas (solo visible en pantallas grandes) */}
        <div
          className="hidden lg:block relative mr-10 cursor-pointer"
          style={{ borderRadius: "10px", border: "1px solid #7E7E7E" }}
        >
          <div
            className="relative"
            style={{ borderRadius: "10px", border: "1px solid #7E7E7E" }}
          >
            <div
              className="flex items-center justify-between text-2xl text-gray-500 font-bold ml-3 mr-3 px-4 py-6"
              onClick={toggleDropdown}
            >
              <span>Castellano</span>
              <div className="ml-2">
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
              className={`absolute right-0 top-full mt-6 w-80 rounded-xl bg-white border-2 border-gray-300 ${
                isDropdownOpen ? "" : "hidden"
              }`}
            >
              <li className="flex items-center px-8 py-8 hover:bg-gray-200 flex-row">
                <div className="text-left flex-grow">
                  <div className="rounded-full h-53 w-53 flex items-left text-gray-600 font-bold text-3xl">
                    Català
                  </div>
                </div>
                <img
                  src={catala}
                  alt="bandera Cat"
                  className="h-53 w-53 scale-90 ml-4 flex-none"
                />
              </li>
              <li className="flex items-center px-8 py-8 hover:bg-gray-200 border-t border-gray-300 flex-row">
                <div className="text-left flex-grow">
                  <div className="rounded-full h-53 w-53 flex items-left text-gray-600 font-bold text-3xl">
                    Castellano
                  </div>
                </div>
                <img
                  src={castellano}
                  alt="bandera Esp"
                  className="h-53 w-53 scale-90 ml-4 flex-none"
                />
              </li>
              <li className="flex items-center px-8 py-8 hover:bg-gray-200 border-t border-gray-300 flex-row">
                <div className="text-left flex-grow">
                  <div className="rounded-full h-53 w-53 flex items-left text-gray-600 font-bold text-3xl">
                    English
                  </div>
                </div>
                <img
                  src={english}
                  alt="bandera Eng"
                  className="h-53 w-53 scale-90 ml-4 flex-none"
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Botón Entrar (solo visible en pantallas grandes) */}
        <div
          className="hidden lg:block"
          style={{ borderRadius: "10px", border: "1px solid black" }}
        >
          <button
            className="bg-transparent px-1 py-3 flex items-center"
            style={{ borderRadius: "10px", border: "1px solid black" }}
          >
            <div className="ml-8">
              <img src={selector} className="h-8 w-8" />
            </div>
            <label
              htmlFor="LoginModal"
              className="text-black hover:cursor-pointer font-bold ml-6 mr-16 mt-4 mb-4 text-2xl"
            >
              Entrar
            </label>
            <LoginModal />
            <RegistrationModal />
          </button>
        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        {/* <div className="flex-grow flex justify-end items-center"> */}
        <div
          className="lg:hidden relative mr-0 pr-10 flex-grow flex justify-end items-center"
          style={{ borderRadius: "10px" }}
        >
          <button
            className="bg-transparent px-4 py-6 flex items-center"
            style={{ borderRadius: "10px" }}
            onClick={toggleDropdown}
          >
            <div className="ml-8">
              <img src={menu} className="h-8 w-8" />
            </div>
          </button>
          {/* </div> */}

          {/* Desplegable Idiomas + Administración (pantallas pequeñas) */}
          {isDropdownOpen && (
            <ul className="lg:hidden absolute right-0 top-full mt-6 mr-0 rounded-tl-xl rounded-bl-xl bg-white border-2 border-gray-300">
              <li className="flex items-center px-8 py-8 ml-4 mt-6 hover:bg-gray-200 flex-row">
                <div className="text-left flex-grow">
                  <div className="rounded-full h-53 w-53 flex items-left text-black font-bold text-4xl">
                    Idioma
                  </div>
                </div>
              </li>
              <li className="flex items-center px-8 py-4 ml-4 hover:bg-gray-200 flex-row">
                <img
                  src={catala}
                  alt="bandera Cat"
                  className="h-45 w-45 scale-90 flex-none"
                />
                <div className="text-left flex-grow ml-2 text-gray-600 text-2xl">
                  Català
                </div>
              </li>
              <li className="flex items-center px-8 py-2 ml-4 hover:bg-gray-200 flex-row">
                <img
                  src={castellano}
                  alt="bandera Esp"
                  className="h-45 w-45 scale-90 flex-none"
                />
                <div className="text-left flex-grow ml-2 text-gray-600 text-2xl">
                  Castellano
                </div>
              </li>
              <li className="flex items-center px-8 py-2 ml-4 hover:bg-gray-200 flex-row">
                <img
                  src={english}
                  alt="bandera Eng"
                  className="h-45 w-45 scale-90 flex-none"
                />
                <div className="text-left flex-grow ml-2 text-gray-600 text-2xl">
                  English
                </div>
              </li>
              <li className="flex items-center px-8 py-8 ml-4 mr-8 mt-6 hover:bg-gray-200 flex-row">
                <div className="text-left flex-grow">
                  <div className="rounded-full h-53 w-53 flex items-left text-black font-bold text-4xl">
                    Administración
                  </div>
                </div>
              </li>
              {/* Botón Entrar pantallas pequeñas */}
              <li>
                <button
                  className="bg-transparent px-4 py-2 ml-12 mb-16 mt-0 flex items-center"
                  style={{ borderRadius: "10px", border: "1px solid black" }}
                >
                  <div className="ml-16 mt-4 mb-4">
                    <img src={selector} className="h-8 w-8" />
                  </div>
                  <label
                    htmlFor="LoginModal"
                    className="text-black hover:cursor-pointer font-bold ml-6 mr-16 mt-4 mb-4 text-2xl"
                  >
                    Entrar
                  </label>
                  <LoginModal />
                  <RegistrationModal />
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
