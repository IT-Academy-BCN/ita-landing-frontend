
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store';
import { deleteApiApps } from '../../../store/reducers/appsCall/appsCallApiFunctionality';
import { putApiApps } from '../../../store/reducers/appsCall/appsCallApiFunctionality';
import Cross from '../../../assets/img/cross.png';
import { AppData, createToken , apps} from '../../../interfaces/interfaces';
 


export default function ModalApps({ newInfoApps, setNewInfoApps }: { newInfoApps: AppData, setNewInfoApps: React.Dispatch<React.SetStateAction<AppData>> }) {

  const dispatch = useDispatch();   
  const { acces_token }: createToken = useSelector(
    (state: RootState) => state.apiPostRegister
  );

  const { appsInfo, loadingApps }: apps = useSelector(
    (state: RootState) => state.appsCallApiFunctionality
  );


  useEffect(() => {
    setNewInfoApps(prevInfoApps => ({
      ...prevInfoApps,
      title: appsInfo.title,
      description: appsInfo.description,
      url: appsInfo.url,
      state: appsInfo.state,
      id: appsInfo.id 
    }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appsInfo ]);


  return (
    <>


      <dialog id="my_modal_1" className="modal ">
        {!loadingApps ?
          <form method="dialog" className="modal-box text-start flex flex-col h-3/4  ">
            <button className="cursor-pointer bg-transparent ml-auto border-0 focus:outline-none hover:bg-transparent">
              <img src={Cross} alt="Cross button" />
            </button>
            <input
              className="resize-none p-5 focus:border-0 focus:outline-none text-black text-4 font-poppins font-medium w-full"
              type="text"
              value={newInfoApps.title}
              onChange={(e) => setNewInfoApps({ ...newInfoApps, title: e.target.value })}
            />

            <textarea
              className="placeholder-white bg-transparent text-gray-600 h-full p-4 w-full h-10 focus:border-0 focus:outline-none"
              value={newInfoApps.description}

              onChange={(e) => setNewInfoApps({ ...newInfoApps, description: e.target.value })}
            />
            <h3>Url del repositorio</h3>
            <input value={newInfoApps.url}
              onChange={(e) => setNewInfoApps({ ...newInfoApps, url: e.target.value })} type="text" placeholder="Type here" className="input input-bordered w-full  py-2   " />


            <h3 className='mt-2 mb-3'>Estado</h3>
            <div className='rounded-full border inline-flex justify-between  '>
              <p onClick={() => { setNewInfoApps({ ...newInfoApps, state: 'COMPLETED' }) }} className={newInfoApps.state == 'COMPLETED' ? ' font-bold bg-completed rounded-full p-3 cursor-pointer  ' : 'cursor-pointer p-3'}>Completado</p>
              <p onClick={() => { setNewInfoApps({ ...newInfoApps, state: 'IN PROGRESS' }) }} className={newInfoApps.state == 'IN PROGRESS' ? 'font-bold bg-building ml-2 rounded-full p-3 cursor-pointer ' : 'ml-2 cursor-pointer p-3'}>En progreso</p>
              <p onClick={() => { setNewInfoApps({ ...newInfoApps, state: 'SOON' }) }} className={newInfoApps.state == 'SOON' ? 'font-bold bg-soon ml-2 rounded-full p-3 cursor-pointer' : 'ml-2 p-1 cursor-pointer p-3'}>Terminado</p>
            </div>




            <div className="flex justify-center  mt-5">

              <button className="mr-5 xl:px-7 btn btn-outline-primary border-gray-600 bg-transparent text-gray-600" onClick={() => deleteApiApps(appsInfo.id, acces_token, dispatch)}  >Eliminar</button>
              <button className="btn xl:px-9  bg-pink-it text-white" onClick={() => putApiApps(newInfoApps, acces_token, dispatch, appsInfo.id)}  >Guardar</button>

            </div>

          </form> : <span className=" loading loading-spinner loading-lg "></span>}
      </dialog>


    </>
  )
}
