import { useState } from 'react';
import cross from '../../img/cross.png';
import axios from 'axios';
export default function LoginComponent({ setIsDropdownEnterButton, setisDropdownCuenta }: { setIsDropdownEnterButton: any, setisDropdownCuenta: any }) {
  const [messageError,setMessageError] = useState('')
  const handleSubmit = async(e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log([...formData]);
    axios.post('http://87.106.229.119/api/register',formData)
    .then(resp=> {console.log( resp.data.result.message); setMessageError(resp.data.result.message.split('.')[0])})
    .catch(err=> console.log(err,'error'))
  }

  return (
    <>
      <div>
        <div className={`absolute z-50 right-0 top-full mt-6 w-80 rounded-xl bg-white border-2 `}>
          <div className="p-3 flex ">
            <img onClick={() => setisDropdownCuenta(false)} src={cross} className="cursor-pointer w-3 ml-auto" alt="" />
          </div>
          <div className="flex flex-col justify-evenly h-[450px] px-5 py-0 ">
            <h1 className="text-start">Registro</h1>
            <form onSubmit={handleSubmit}>
              <input   name="dni" type="text" className="input input-bordered w-full max-w-xs" placeholder="DNI o NIE" />
              <input  name="email" type="email" className="mt-2 input input-bordered w-full max-w-xs" placeholder="Email" />
              <input  name="password" type="password" className="mt-2 input input-bordered w-full max-w-xs" placeholder="Contraseña" />
              <input  name="password_confirmation" type="password" className="mt-2 input input-bordered w-full max-w-xs" placeholder="Repite Contraseña" />
              <input name="Admin" type="number" className="mt-2 input input-bordered w-full max-w-xs" placeholder="Administrador" />
              <button type='submit' className='mt-5 btn btn-wide bg-secondary'>Registro</button>
            </form>
            <a className="text-xs mt-5">
              <span onClick={() => { setIsDropdownEnterButton(true); setisDropdownCuenta(false) }} className="border-b-2 border-black">¿Tienes cuenta? acceder</span>
            </a>
            <p>{messageError}</p>
          </div>
        </div>
        <div onClick={() => { setisDropdownCuenta(false) }} className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </>
  )
}