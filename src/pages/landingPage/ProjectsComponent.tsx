import curvedArrow from "../../img/curvedArrow.svg"
import { FaRegCircle, FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useEffect,useState } from "react";
import { apiCallApps, apiCallAppsInfo,postApiApps } from "../../store/reducers/appsCall/appsCallApiFunctionality";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Pencil from '../../img/vector-10.png'
import ModalApps from "./modalApps";
import ModalsAddApps from './ModalsAddApps'

declare global {
  interface Window {
    my_modal_1: {
      showModal: () => void;
    };
  }
}

declare global {
  interface Window {
    my_modal_2: {
      showModal: () => void;
    };
  }
}
export const ProjectsComponent = () => {

  interface createToken {
    acces_token: String;  
  } 
  const { acces_token }: createToken = useSelector(
    (state: RootState) => state.apiPostRegister
  );

  const handleSendApiInfo= (id:any)=>{
    setCurrentID(id);
    apiCallAppsInfo(dispatch,id,acces_token)

  }
  interface ApiPostRegisterState {
    apps: any[];
    
  }
  
  const { apps }: ApiPostRegisterState = useSelector(
    (state: RootState) => state.appsCallApiFunctionality
  );

  const dispatch = useDispatch();

  const [currentID, setCurrentID] = useState(null);
  useEffect(()=>{
    apiCallApps(dispatch);
  },[]);

  const [newInfoApps, setNewInfoApps] = useState(
    {
        title: '',
        description: '',
        url: '',
        state: ''
      }
)

const sendInfo=()=>{

 postApiApps(newInfoApps, acces_token, dispatch);
console.log(newInfoApps)
 
}

  return (
  <>
    <div className=" relative container min-h-screen  mx-auto mt-10 flex ">
      {/*Projects section*/}
      <section className="flex  flex-col justify-center">
        {/*Projects title area*/}
        {window.location.pathname != '/backoffice'&& (
        <div className="grid grid-cols-4 grid-rows-1  ">

          {window.location.pathname !== '/backoffice' && (
            <img className="h-[44px] mr-10 place-self-end md:p-0 pl-14" src={curvedArrow}></img>
          )}

          <h2 className="font-black text-3xl text-center col-span-6">
            Directorio de aplicaciones IT Academy
          </h2>
        </div>)}
        {/* Projects legend*/}
        {window.location.pathname !== '/backoffice' && (
        <div className="flex flex-col md:flex-row lg:w-3/4  lg:justify-end justify-center mx-auto my-6  gap-4">
          <div className="flex justify-center items-center gap-2">
            <IconContext.Provider
              value={{ color: "#bedfc8", className: "global-class-name" }}
            >
              <FaRegCircle />
              Terminadas
            </IconContext.Provider>
          </div>
          <div className="flex justify-center items-center gap-2">
            <IconContext.Provider
              value={{ color: "#f8e9b9", className: "global-class-name" }}
            >
              <FaRegCircle /> En construcción
            </IconContext.Provider>
          </div>
          <div className = "flex justify-center items-center gap-2">
            <IconContext.Provider
              value={{ color: "#f7cbc4", className: "global-class-name" }}
            >
              <FaRegCircle />
              Próximamente
            </IconContext.Provider>
          </div>
        </div>)}
        {/*Cards*/}
         
         {
          window.location.pathname == '/backoffice'&& (
            <div>
              <button onClick={()=>{  window.my_modal_2?.showModal();}} className="btn btn-success mb-4">
                Añadir nuevo
              </button>
            </div>
          )
         }
       
          
        
        <div className=" flex flex-wrap gap-7 justify-center ">
          {/*Card 1*/}

          { apps.map((cards) =>{
         return   <div className={`cards ${cards.state === 'COMPLETED' &&( 'bg-completed')} 
         ${cards.state === 'SOON' ? 'bg-soon' : 'bg-building'}
         card md:w-80 m-5 md:m-0 p-0   text-grey-it`}>            
         <div className="card-body">

         {window.location.pathname == '/backoffice' && ( <div><img onClick={()=>{  window.my_modal_1?.showModal(); handleSendApiInfo(cards.id) }} className="w-4 ms-auto cursor-pointer hover:scale-110 " src={Pencil} alt="" />   </div>)}
              <h2 className="card-title">{cards.title}</h2>
              <p>
                {cards.description}
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-block btn-outline bg-base-100 border-none normal-case gap-2">
                  Ir a app <FaArrowRight />
                </button>
              </div>
            </div>
            
          </div>
          
        })
          
          }
         <ModalApps  newInfoApps={newInfoApps} setNewInfoApps={setNewInfoApps}  />
          <ModalsAddApps newInfoApps={newInfoApps} setNewInfoApps={setNewInfoApps} sendInfo={sendInfo} />
        </div>
      </section>
    </div>
  </>)
};

export default ProjectsComponent;
