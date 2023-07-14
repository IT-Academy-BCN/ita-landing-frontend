
import Cross from '../../img/cross.png'
export default function ModalsAddApps({newInfoApps, setNewInfoApps,sendInfo}:{newInfoApps:any, setNewInfoApps:any,sendInfo:any}) {
  return (
    <>
      <dialog id="my_modal_2"  className="modal ">
  
  <form  method="dialog"  className="modal-box text-start flex flex-col h-3/4  ">  
  <button className="cursor-pointer bg-transparent ml-auto border-0 focus:outline-none hover:bg-transparent">
      <img src={Cross} alt="Cross button" />
    </button>
  <input placeholder='Titulo'onChange={(e)=> setNewInfoApps({...newInfoApps, title:e.target.value})}
  className="resize-none p-5 focus:border-0 focus:outline-none text-black text-4 font-poppins font-medium w-full"
  type="text"
   
   
/>
   
    <textarea placeholder='Descripción'onChange={(e)=> setNewInfoApps({...newInfoApps, description:e.target.value})}
  className="placeholder-dark bg-transparent text-gray-600 h-full p-4 w-full h-10 focus:border-0 focus:outline-none"
   
   
/>
    <h3>Url del repositorio</h3>
    <input   onChange={(e)=> setNewInfoApps({...newInfoApps, url:e.target.value})}
      type="text" placeholder="URL" className="input input-bordered w-full  py-2   " />
     
    
    <h3 className='mt-2 mb-3'>Estado</h3>
    <div className='rounded-full border inline-flex justify-between  '>

        <p onClick={()=> {setNewInfoApps({ ...newInfoApps, state: 'COMPLETED' })}} className={newInfoApps.state == 'COMPLETED' ?' font-bold bg-completed rounded-full p-3 cursor-pointer  ': 'cursor-pointer p-3'}>Completado</p> 
        <p onClick={()=> {setNewInfoApps({ ...newInfoApps, state: 'IN PROGRESS' })}} className={newInfoApps.state == 'IN PROGRESS' ?'font-bold bg-building ml-2 rounded-full p-3 cursor-pointer ': 'ml-2 cursor-pointer p-3'  }>En progreso</p> 
        <p onClick={()=> {setNewInfoApps({ ...newInfoApps, state: 'SOON' })}} className={newInfoApps.state == 'SOON' ?'font-bold bg-soon ml-2 rounded-full p-3 cursor-pointer': 'ml-2 p-1 cursor-pointer p-3'  }>Terminado</p>
    </div>
    
      
      

      <div className="flex justify-center  mt-5">
        
        
        <button className="btn xl:px-9  bg-pink-it text-white" onClick={sendInfo}    >Añadir</button>

    </div>
 
  </form>
</dialog> 
  
    </>
  )
}
