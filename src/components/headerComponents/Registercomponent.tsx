import cross from '../../img/cross.png';
import { handleSubmit,eraseMessageError } from '../../store/reducers/apiCall/apiPostRegisterLogin';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
export default function LoginComponent({ setIsDropdownEnterButton, setisDropdownCuenta }: { setIsDropdownEnterButton: any, setisDropdownCuenta: any }) {

 

//Api Posting REDUX
  const dispatch = useDispatch();

  
  interface ApiPostRegisterState {
    messageError: String;
    isLoadingMessageError: Boolean;
  }
  
  const { messageError, isLoadingMessageError }: ApiPostRegisterState = useSelector(
    (state: RootState) => state.apiPostRegister
  );
  const submitInformation = (e: React.FormEvent) => {
    handleSubmit(dispatch, e, 1, null);
  };
  
  return (
    <>
      <div>
      
        <div className={`absolute z-50 right-0 top-full mt-6 w-80 rounded-xl bg-white border-2 `}>
          <div className="p-3 flex ">
            <img onClick={() => setisDropdownCuenta(false)} src={cross} className="cursor-pointer w-3 ml-auto" alt="" />
            
          </div>
          <div className="flex flex-col justify-evenly h-[450px] px-5 py-0 ">
            <h1 className="text-start">Registro</h1>

            
            <form onSubmit={submitInformation}>
              <input   name="dni" type="text" className="input input-bordered w-full max-w-xs" placeholder="DNI o NIE" />
              <input  name="email" type="email" className="mt-2 input input-bordered w-full max-w-xs" placeholder="Email" />
              <input  name="password" type="password" className="mt-2 input input-bordered w-full max-w-xs" placeholder="Contraseña" />
              <input  name="password_confirmation" type="password" className="mt-2 input input-bordered w-full max-w-xs" placeholder="Repite Contraseña" />
              <input   name="Admin" type="text" className="mt-2 input input-bordered w-full max-w-xs" placeholder="Administrador" />
              <button type='submit' className='mt-5 btn btn-wide bg-pink-it text-white'>Registro</button>
            </form> 

            {/* Icono de carga */}
            {
              !isLoadingMessageError ?  <p>{messageError}</p> : <span className=" loading loading-spinner loading-lg"></span>
            }
            <a className="text-xs mt-5">
              <span onClick={() => { dispatch(eraseMessageError()); setIsDropdownEnterButton(true); setisDropdownCuenta(false) }} className="border-b-2 border-black">¿Tienes cuenta? acceder</span>
            </a>
           
            
          </div>
        </div>
        <div onClick={() => { setisDropdownCuenta(false); dispatch(eraseMessageError()) }} className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </>
  )
}