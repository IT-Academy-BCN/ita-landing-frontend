 
import cross from '../../img/cross.png';

import {}



export default function loginComponent({setisDropdownOpenCuenta, setIsDropdownOpenEntrar}) {
  return (
    < >
      <div>

        
<div

      className={`absolute z-50 right-0 top-full mt-6 w-80 rounded-xl bg-[#FFFF] border-2 border-[#BDBDBD] `}
    >

      <div className="p-3 flex " >
            <img onClick={()=> setisDropdownOpenCuenta(false)} src={cross} className=" cursor-pointer w-3 ml-auto " alt="" />
      </div>
      <div className="flex flex-col  justify-evenly h-96 px-5 py-0  ">

          <h1 className="text-start">Registro</h1>

          <form action="POST">

          <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DNI o NIE" />

          <input type="email"  className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />

          <input type="password" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contraseña" />

          <input type="password"  className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contraseña" />
           
          <input type="number"  className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Administrador" />
        
        </form>

          <button style={{backgroundColor: '#B91879', padding:'0.75rem', color:'white'}}>Registro</button>

          <a className="text-xs mt-5 ">
           <span onClick={()=> {setIsDropdownOpenEntrar(true),  setisDropdownOpenCuenta(false)} } className="border-b-2 border-black">¿Tienes cuenta? acceder</span> 
          </a>

     </div> 
      
    </div>

  <div onClick={()=>{ setisDropdownOpenCuenta(false)}} className="opacity-25 fixed inset-0 z-40 bg-black"></div>

</div>
    </ >
  )
}
