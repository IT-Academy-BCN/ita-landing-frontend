import PasswordInput from "./PasswordInput";
import RegistrationModal from "./RegistrationModal";

function LoginModal() {
    return (
      <>
        <input type="checkbox" id="LoginModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-[390px] h-[610px] max-w-5xl fixed top-4 right-4">
            <label
              htmlFor="LoginModal"
              className="absolute right-5 top-5 text-2xl hover:text-purple-600 hover:cursor-pointer"
            >
              ✕
            </label>
            <h3 className="ml-7 mb-10 object-right flex justify-start font-bold text-2xl mt-10">
              Login
            </h3>
  
  
            <div>
              <form action="" method="post">
              <input type="text" name="dni" placeholder="DNI o NIE" className="my-1.5 input input-bordered w-[85%] max-w-xs text-base" />
              <PasswordInput inputName="password" inputPlaceholder="Contraseña" />
            
              <div className="flex justify-end">
                <a href="#" className="text-[#ffffff] hover:text-[#ffffff] text-base mr-6 mt-5 mb-8 underline hover:text-purple-600 hover:cursor-pointer">Recordar/cambiar contraseña</a>
              </div>
  
                <div className="modal-action flex justify-center">
                  <button
                    type="submit"
                    className="btn text-base mb-7 w-[290px] h-[60px] bg-[#B91879] hover:bg-[#B91879] hover:bg-opacity-30 active:bg-white active:bg-opacity-30 text-white">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center">
              <label htmlFor="RegistrationModal" className="font-bold text-black mt-5 mb-1 underline hover:text-purple-600 hover:cursor-pointer">¿No tienes cuenta?, crear una</label>
              <RegistrationModal />
            </div>
          </div>
        </div>
      </>
    );
  }
  export default LoginModal;
  