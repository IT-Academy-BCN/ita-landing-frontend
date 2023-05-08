import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-4 left-3 right-3 z-50 bg-transparent flex justify-between items-center py-4 px-6">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src="../../public/images/ITA_header_logo.png" alt="logo" className="scale-90" />
      </div>

      {/* Idiomas + Botón Entrar */}
      <div className="flex-grow flex justify-end items-center">
        {/* Botón Desplegable Idiomas */}
        <div className="relative mr-10" style={{ borderRadius: '10px', border: '1px solid #7E7E7E' }}>
          <div className="relative" style={{ borderRadius: '10px', border: '1px solid #7E7E7E' }}>
            <div
              className="flex items-center justify-between text-2xl text-gray-500 font-bold ml-3 mr-3 px-4 py-6"
              onClick={toggleDropdown}
            >
              <span>Castellano</span>
              <div className="ml-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="chevron-down w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M10 13.292l-5.146-5.147a1 1 0 0 1 1.414-1.414L10 10.464l3.732-3.733a1 1 0 0 1 1.414 1.414L10 13.292z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {/* Tabla Idiomas (links) */}
            <ul className={`absolute right-0 top-full mt-6 w-80 rounded-xl bg-white border-2 border-gray-300 ${isDropdownOpen ? '' : 'hidden'}`}>
              <li className="flex items-center px-8 py-8 hover:bg-gray-200 flex-row">
                <div className="text-left flex-grow">
                  <div className="rounded-full h-53 w-53 flex items-left text-gray-600 font-bold text-3xl">
                    Català
                  </div>
                </div>
                <img src="../../public/images/catala.png" alt="bandera Cat" className="h-53 w-53 scale-90 ml-4 flex-none" />
              </li>
              <li className="flex items-center px-8 py-8 hover:bg-gray-200 border-t border-gray-300 flex-row">
                <div className="text-left flex-grow">
                  <div className="rounded-full h-53 w-53 flex items-left text-gray-600 font-bold text-3xl">
                    Castellano
                  </div>
                </div>
                <img src="../../public/images/castellano.png" alt="bandera Esp" className="h-53 w-53 scale-90 ml-4 flex-none" />
              </li>
              <li className="flex items-center px-8 py-8 hover:bg-gray-200 border-t border-gray-300 flex-row">
                <div className="text-left flex-grow">
                   <div className="rounded-full h-53 w-53 flex items-left text-gray-600 font-bold text-3xl">
                    English
                  </div>
                </div>
                <img src="../../public/images/english.png" alt="bandera Eng" className="h-53 w-53 scale-90 ml-4 flex-none" />
              </li>
            </ul>
          </div>
        </div>

        {/* Botón Entrar */}
        <button className="bg-transparent px-4 py-6 flex items-center" style={{ borderRadius: '10px', border: '1px solid black' }}>
          <div className="ml-8">
            <img src="../../public/images/sel_right.png" className="h-8 w-8" />
          </div>
          <span className="text-black font-bold ml-6 mr-8 text-2xl">Entrar</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
