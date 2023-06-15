 import {useState} from 'react';
 import axios from 'axios';
import cross from '../../img/cross.png'
import { useNavigate } from 'react-router-dom';

export default function loginComponent({setIsDropdownEnterButton, setisDropdownCuenta }: {setIsDropdownEnterButton:any, setisDropdownCuenta:any}) {
  const navegador = useNavigate();
  const [messageError,setMessageError] = useState('')
  const handleSubmit = async(e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
     axios.post('http://87.106.229.119/api/login',formData)
    .then(resp=> {console.log( resp); navegador('/backoffice');  })
    .catch(err=>{err.response.status==422? setMessageError(err.response.data.message.split('.')[0]) : setMessageError(err.response.data.result.message) })
  }
  
  return (
    < >
      <div>

        
    <div

      className={`absolute z-50 right-0 top-full mt-6 w-80 rounded-xl bg-white border-2 `}
    >

      <div className="p-3 flex " >
            <img onClick={()=> setIsDropdownEnterButton(false)} src={cross} className=" cursor-pointer w-3 ml-auto " alt="" />
      </div>
      <div className="flex flex-col  justify-evenly h-80 px-5 py-0  ">

          <h1 className="text-start">Login</h1>
          <form  onSubmit={handleSubmit}>
          <input type="text" name='dni' className="input input-bordered w-full max-w-xs" placeholder="DNI o NIE" />

          <input type="password" name='password' className="input input-bordered w-full max-w-xs" placeholder="Contraseña" />

       
          <a className="text-xs text-end">
            
            <span className="border-b-2 border-black">Recordar/Cambiar contraseña</span> 
          </a>

          <button type='submit' className='mt-5 btn btn-block bg-secondary' >Login</button>
          
          </form>
          <p>{messageError}</p>
          <a className="text-xs mt-5 ">
           <span  onClick={()=> {setIsDropdownEnterButton(false), setisDropdownCuenta(true)} }  className="border-b-2 border-black">¿No tienes ninguna cuenta?, crear una</span> 
          </a>

     </div> 
      
    </div>

  <div onClick={()=>{ setIsDropdownEnterButton(false)}} className="opacity-25 fixed inset-0 z-40 bg-black"></div>

</div>
    </ >
  )
}
