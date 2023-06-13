 
import cross from '../../img/cross.png'
export default function loginComponent({setIsDropdownOpenEntrar,setisDropdownOpenCuenta}) {
  return (
    < >
      <div>

        
<div

      className={`absolute z-50 right-0 top-full mt-6 w-80 rounded-xl bg-white border-2 `}
    >

      <div className="p-3 flex " >
            <img onClick={()=> setIsDropdownOpenEntrar(false)} src={cross} className=" cursor-pointer w-3 ml-auto " alt="" />
      </div>
      <div className="flex flex-col  justify-evenly h-80 px-5 py-0  ">

          <h1 className="text-start">Login</h1>

          <input type="text" className="input input-bordered w-full max-w-xs" placeholder="DNI o NIE" />

          <input type="password"  className="input input-bordered w-full max-w-xs" placeholder="Contraseña" />


          <a className="text-xs text-end">
            
            <span className="border-b-2 border-black">Recordar/Cambiar contraseña</span> 
          </a>

          <button className='mt-5 btn btn-block bg-secondary' >Login</button>

          <a className="text-xs mt-5 ">
           <span  onClick={()=> {setIsDropdownOpenEntrar(false), setisDropdownOpenCuenta(true)} }  className="border-b-2 border-black">¿No tienes ninguna cuenta?, crear una</span> 
          </a>

     </div> 
      
    </div>

  <div onClick={()=>{ setIsDropdownOpenEntrar(false)}} className="opacity-25 fixed inset-0 z-40 bg-black"></div>

</div>
    </ >
  )
}
