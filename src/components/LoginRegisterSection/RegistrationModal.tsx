import PasswordInput from "./PasswordInput";


function RegistrationModal() {
  return (
    <>
      <input type="checkbox" id="RegistrationModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-[390px] h-[590px] max-w-5xl fixed top-4 right-4">
          <label
            htmlFor="RegistrationModal"
            className="absolute right-5 top-5 text-2xl hover:text-purple-600 hover:cursor-pointer"
          >
            ✕
          </label>
          <h3 className="ml-7 mb-6 object-right flex justify-start font-bold text-2xl mt-10">
            Registro
          </h3>


          <div>
            <form action="" method="post">
            <input type="text" name="dni" placeholder="DNI o NIE" className="my-1.5 input input-bordered w-[85%] max-w-xs text-base" />
            <input type="text" name="email" placeholder="Email" className="my-1.5 input input-bordered w-[85%] max-w-xs text-base" />
            <PasswordInput inputName="password" inputPlaceholder="Contraseña" />
            <PasswordInput inputName="repeatPassword" inputPlaceholder="Repetir contraseña" />
            <PasswordInput inputName="adminCode" inputPlaceholder="Código administrador" />

              <div className="modal-action flex justify-center">
                <button
                  type="submit"
                  className="btn text-base w-[290px] h-[60px] bg-[#B91879] hover:bg-[#B91879] hover:bg-opacity-30 active:bg-white active:bg-opacity-30 text-white">
                  Registro
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center">
            <label htmlFor="RegistrationModal" className="font-bold text-black mt-5 mb-3 underline hover:text-purple-600 hover:cursor-pointer">¿Tienes cuenta?, acceder</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegistrationModal;
