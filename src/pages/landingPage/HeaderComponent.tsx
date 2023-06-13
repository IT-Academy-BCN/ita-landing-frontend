import { useState } from "react";
import logo from "../../images/ITA_header_logo.png";
import castellano from "../../images/castellano.png";
import catala from "../../images/catala.png";
import english from "../../images/english.png";
import selector from "../../images/sel_right.png";
import menu from "../../images/menu.png";
import LoginComponent from "../../components/headerComponents/LoginComponent";
import RegisterComponent from '../../components/headerComponents/Registercomponent';
 /*import LoginModal from "./LoginRegisterSection/LoginModal";
import RegistrationModal from "./LoginRegisterSection/RegistrationModal";*/
  
const Header = () => {
 


  const [isDropdownOpen, setIsDropdownOpen] = useState (false);
  const [IsDropdownEnterButton, setIsDropdownEnterButton] = useState (false);
  const [isDropdownCuenta, setisDropdownCuenta] = useState (false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    
  };
  return (
    <header className="w-full z-10 absolute flex  justify-between  ">
      {/* Logo */}
      
    <div className="w-1/2 lg:w-auto ml-5 lg:ml-0 ">
        <img src={logo} alt="logo"  className=" lg:w-1/2"  />
    </div>
    
         
       

      {/* Idiomas + Botón Entrar (solo visibles en pantallas grandes) */}
      <div className=" flex  ">
        {/* Botón Desplegable Idiomas (solo visible en pantallas grandes) */}
        <div
          className="hidden lg:block relative mr-10 cursor-pointer "
          
        >
          <div
            className="relative btn btn-outline hover:bg-transparent  "
            onClick={toggleDropdown} 
          >
            <div
              className="flex  items-center justify-between text-sm text-black font-bold   "
              
            >
              <span>Castellano</span>
              <div >
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
              className={`absolute   right-0 top-full mt-6 w-80 rounded-xl bg-white border-2  ${
                isDropdownOpen ? "" : "hidden"
              }`}
            >
              <li className="flex items-center px-8 py-8 hover:bg-gray-100 hover:rounded-xl flex-row">
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
              <li className=" hover:rounded-b-xl flex items-center px-8 py-8 hover:bg-gray-200 border-t-2  border-[#BDBDBD] flex-row">
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
          className="hidden lg:block   "    
        >
          <button  
           onClick={()=>{setIsDropdownOpen(false), setIsDropdownEnterButton(true)}} className=" flex btn btn-outline hover:bg-transparent hover:text-black"
          >
            <div>
              <img src={selector} className="h-5 w-5 mr-3" />
            </div>
            <span className="  font-bold   text-sm">
              Entrar 
            </span>
          </button>
        </div>
        
         
         {IsDropdownEnterButton ? <LoginComponent setIsDropdownEnterButton={setIsDropdownEnterButton} setisDropdownCuenta={setisDropdownCuenta}     />   : null
          }
          {
          isDropdownCuenta ?   <RegisterComponent setIsDropdownEnterButton={setIsDropdownEnterButton}  setisDropdownCuenta={setisDropdownCuenta}  /> : null
          }



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
            <div className="">
              <img src={menu} className="h-8 w-8" />
            </div>
          </div>
          {/* </div> */}

          {/* Desplegable Idiomas + Administración (pantallas pequeñas) */}
          {isDropdownOpen && (

          

           
        <>
            <ul    className=" z-50 lg:hidden justify-items-end bg-[#FFFF] absolute top-full  mt-16 mr-0 rounded-tl-xl rounded-bl-xl border-2 border-[#BDBDBD] ">
              <li className="flex items-center px-8 py-8 ml-4 mt-6 hover:bg-gray-200 flex-row text-[#7E7E7E]">
                <div className="text-left flex-grow">
                  <div className="rounded-full h-53 w-53 flex items-left text-black font-bold text-2xl">
                    Idioma
                  </div>
                </div>
              </li>
              <li className="flex items-center px-8 py-4 ml-4    cursor-pointer    lg:hover:bg-gray-200 flex-row">
                <img
                  src={catala}
                  alt="bandera Cat"
                  className="h-45 w-45 scale-90 flex-none"
                />
                <div className="text-left flex-grow ml-2 text-gray-600 text-2xl text-[#7E7E7E]">
                 <h3 className=" hover:border-b-4 hover:border-blue-800">Català</h3> 
                </div>
              </li>
              <li className="flex items-center px-8 py-2 ml-4 lg:hover:bg-gray-200 flex-row cursor-pointer">
                <img
                  src={castellano}
                  alt="bandera Esp"
                  className="h-45 w-45 scale-90 flex-none"
                />
                <div className="text-left flex-grow ml-2 text-gray-600 text-2xl text-[#7E7E7E]">
                <h3 className=" hover:border-b-4 hover:border-blue-800"> Castellano </h3>
                </div>
              </li>
              <li className="flex items-center px-8 py-2 ml-4 lg:hover:bg-gray-200 flex-row cursor-pointer">
                <img
                  src={english}
                  alt="bandera Eng"
                  className="h-45 w-45 scale-90 flex-none"
                />
                <div className="text-left flex-grow ml-2 text-gray-600 text-2xl text-[#7E7E7E]">
                <h3 className=" hover:border-b-4 hover:border-blue-800">  English</h3>
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

            <div onClick={()=>{ setIsDropdownOpen(false)}} className="opacity-25 fixed inset-0 z-40 bg-black"></div>

            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
