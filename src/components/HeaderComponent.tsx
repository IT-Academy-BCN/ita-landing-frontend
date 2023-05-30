import { useState } from "react";
import logo from "../images/ITA_header_logo.png";
import castellano from "../images/castellano.png";
import catala from "../images/catala.png";
import english from "../images/english.png";
import selector from "../images/sel_right.png";
import menu from "../images/menu.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFF] flex justify-between items-center px-6 h-[150px] ">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="scale-[0.65]" />
      </div>

      {/* Idiomas + Botón Entrar (solo visibles en pantallas grandes) */}
      <div className="flex-grow flex justify-end items-center">
        {/* Botón Desplegable Idiomas (solo visible en pantallas grandes) */}
        <div
          className="hidden lg:block relative mr-10 cursor-pointers"
          style={{ borderRadius: "10px", border: "1px solid #7E7E7E" }}
        >
          <div
            className="relative "
            style={{ borderRadius: "10px", border: "1px solid #7E7E7E" }}
          >
            <div
              className="flex items-center justify-between text-xl text-[#7E7E7E] font-bold h-20 ml-3 mr-3 px-4 py-6"
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
              className={`absolute right-0 top-full mt-6 w-80 rounded-xl bg-[#FFFF] border-2 border-[#BDBDBD] ${
                isDropdownOpen ? "" : "hidden"
              }`}
            >
              <li className="flex items-center px-8 py-8 hover:bg-gray-200 flex-row">
                <div className="text-left flex-grow">
                  <div className="rounded-full h-53 w-53 flex items-left text-[#4F4F4F] font-bold text-xl">
                    Català
                  </div>
                </div>
                <img
                  src={catala}
                  alt="bandera Cat"
                  className="h-53 w-53 scale-90 ml-4 flex-none"
                />
              </li>
              <li className="flex items-center px-8 py-8 hover:bg-gray-200 border-t border-[#BDBDBD] flex-row">
                <div className="text-left flex-grow">
                  <div className="rounded-full h-53 w-53 flex items-left text-[#4F4F4F] font-bold text-xl">
                    Castellano
                  </div>
                </div>
                <img
                  src={castellano}
                  alt="bandera Esp"
                  className="h-53 w-53 scale-90 ml-4 flex-none"
                />
              </li>
              <li className="flex items-center px-8 py-8 hover:bg-gray-200 border-t-2  border-[#BDBDBD] flex-row">
                <div className="text-left flex-grow">
                  <div className="rounded-full h-53 w-53 flex items-left text-[#4F4F4F] font-bold text-xl">
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
            className="bg-transparent px-4 py-6 h-18 flex items-center text-[#1E1E1E]"
            style={{ borderRadius: "10px", border: "1px solid black" }}
          >
            <div className="ml-8">
              <img src={selector} className="h-8 w-8" />
            </div>
            <span className="text-black font-bold ml-4 mr-4 text-xl">
              Entrar
            </span>
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
            <ul className="lg:hidden justify-items-end bg-[#FFFF] absolute top-full mt-16 mr-0 rounded-tl-xl rounded-bl-xl border-2 border-[#BDBDBD]">
              <li className="flex items-center px-8 py-8 ml-4 mt-6 hover:bg-gray-200 flex-row text-[#7E7E7E]">
                <div className="text-left flex-grow">
                  <div className="rounded-full h-53 w-53 flex items-left text-black font-bold text-2xl">
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
                <div className="text-left flex-grow ml-2 text-gray-600 text-2xl text-[#7E7E7E]">
                  Català
                </div>
              </li>
              <li className="flex items-center px-8 py-2 ml-4 hover:bg-gray-200 flex-row">
                <img
                  src={castellano}
                  alt="bandera Esp"
                  className="h-45 w-45 scale-90 flex-none"
                />
                <div className="text-left flex-grow ml-2 text-gray-600 text-2xl text-[#7E7E7E]">
                  Castellano
                </div>
              </li>
              <li className="flex items-center px-8 py-2 ml-4 hover:bg-gray-200 flex-row">
                <img
                  src={english}
                  alt="bandera Eng"
                  className="h-45 w-45 scale-90 flex-none"
                />
                <div className="text-left flex-grow ml-2 text-gray-600 text-2xl text-[#7E7E7E]">
                  English
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
                  className="bg-transparent px-4 py-2 ml-12 mb-8 mt-0 flex items-center"
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
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
