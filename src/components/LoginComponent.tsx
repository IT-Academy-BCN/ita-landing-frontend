import React, { useState } from 'react';
import close from "../images/close.png";
import blind from "../images/blind.png";

const LoginComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-end mr-8">
          <div className="w-full max-w-xs p-10 rounded-2xl bg-white right-0 border relative">
            <img
              src={close}
              alt="Cerrar"
              className="absolute top-2 right-2 focus:outline-none cursor-pointer w-5 h-6"
              onClick={handleClose}
            />
            <h1 className="text-xl color: #282828 font-bold mb-8 mt-4 text-left">Login</h1>
            <input
              type="text"
              id="dni"
              className="w-full border border-gray-300 rounded-md px-3 py-3 mb-4 text-gray-800 placeholder-gray-600 text-xs"
              placeholder="DNI o NIE"
            />
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                className="w-full border border-gray-300 rounded-md px-3 py-3 mb-4 text-gray-800 placeholder-gray-600 text-xs"
                placeholder="Contraseña"
              />
              <img
                src={blind}
                alt="Mostrar/Ocultar contraseña"
                className="absolute top-2 right-3 text-gray-500 focus:outline-none cursor-pointer w-8 h-7"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className="mb-4 text-right">
              <a href="#" className="text-black underline" style={{ color: '#000000', textDecorationColor: 'lightgray', fontSize: '12px' }}>Recordar/cambiar contraseña</a>
            </div>
            <button
              className="w-full rounded-md py-4 mt-6 mb-12"
              style={{ backgroundColor: '#B91879', color: 'white', fontSize: '12px' }}
            >
              Login
            </button>
            <div className="text-center">
              <p className="text-sm">
                <a href="#" className="text-black underline text-center text-base" style={{ color: '#000000', textDecorationColor: 'lightgray', fontSize: '12px' }}>No tienes cuenta, crear una</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginComponent;