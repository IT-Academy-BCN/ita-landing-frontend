import {  useState } from 'react';
import cross from '../../img/cross.png';
import { handleSubmit,eraseMessageError } from '../../store/reducers/apiCall/apiPostRegisterLogin';
import { useDispatch, useSelector } from 'react-redux';
export default function LoginComponent({ setIsDropdownEnterButton, setisDropdownCuenta }: { setIsDropdownEnterButton: any, setisDropdownCuenta: any }) {


//Avoid the user write letters.
   const [adminValue,setAdminValue]  = useState<number | null>(null);
    const onChangeValueAdmin=(e:any)=>{
      setAdminValue(parseInt(e.target.value))
    };

   const AdminValueCodeKey = (e: any) => {
    const key = e.keyCode || e.charCode;
    const keyIsNumber = (key >= 48 && key <= 57 || key == 8 || key == 13);
    if (!keyIsNumber) {
      e.preventDefault();
    }
  };


//Api Posting REDUX
  const dispatch = useDispatch();
  let {messageError,  isLoadingMessageError} = useSelector((state:any)=> state.apiPostRegister);
  const submitInformation = (e: any) => {
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
              <input  onKeyDown={AdminValueCodeKey} onChange={onChangeValueAdmin} name="Admin" type="text" className="mt-2 input input-bordered w-full max-w-xs" placeholder="Administrador" />
              <button type='submit' className='mt-5 btn btn-wide bg-secondary'>Registro</button>
            </form> 
            {
              !isLoadingMessageError ?  <p>{messageError}</p> : <span className="loading loading-spinner loading-sm">...</span>

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