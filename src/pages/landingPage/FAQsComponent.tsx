import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import FaqsModified from "./FaqsModified";
import { apiCall, deleteApiFaqs } from "../../store/reducers/faqsCall/faqsReducer";
import deleteFaqIcon from '../../images/icon-delete-faq-backoffice.png';
import DeleteFaqModal from "./Modals/DeleteFaqModal";



const FAQs = () => {
  //Interfaces//
  interface Faq {
    title: string;
    description: string;
    id:number;
  }

  interface createToken {
    acces_token: String;  
  }

  interface createFaqs {
    faqs: any;  
  }
  //Dispatch//
  const dispatch = useDispatch();

  //Getters para los datos desde redux//
  
  const { acces_token }: createToken = useSelector(
    (state: RootState) => state.apiPostRegister
  );

  
  const { faqs }: createFaqs = useSelector(
    (state: RootState) => state.faqsReducer
  );

 //llamada api//

  useEffect(()=>{
    apiCall(dispatch)
  },[])

  const [openModal, setOpenModal] = useState(false)
 
  const editableContent = (index:string) => {
    const content = document.getElementById(index);

    //ha de checkear si esta desplegado o no!!!

    if(content){
      content.contentEditable = 'true'; // <-- 1r funció -> contentEditable
      content.classList.add('bg-slate-200'); // <----- NO FUNCIONA!!!!

      setShowSaveButtons(index) // <-- 2n funció --> SaveButtons de un indice = true (Cancelar y Guardar)
      setShowEditButtons(false) // <-- 3a funció --> EditButton tots! [així esta be!] = false (Editar y Eliminar)

    }
  }

  const [showSaveButtons, setShowSaveButtons] = useState(""); // botones de Cancelar y Guardar
  const [showEditButtons, setShowEditButtons] = useState(true); // botones de Editar y Eliminar


  const cancelEditContent = (index:number , description:string) => {
    setShowEditButtons(true)
    const content = document.getElementById(index.toString());
    if(content){

      //REFRESH DESCRIPTION DIV
      

      content.contentEditable = 'false';

    }
  }

  const [faqsState, setFaqsState] = useState(faqs) //actualizar array de FAQS <-- ÚLTIMO PASO

  return (

    <div className="w-3/4 m-auto">
      <div className="grid grid-cols-6 grid-rows-2">
        <h2 className="font-black text-2xl font-poppins text-center col-span-6">
          Preguntas frecuentes
        </h2>
      </div>

      { window.location.pathname =='/backoffice'&&(<FaqsModified/>) }

      {faqsState.map((faq:Faq, index:number) => (
        <div className={`collapse rounded-md ${'mb-5'  // Agrega mb-5 si no es el último elemento
          } shadow-xl`} key={index}>
            
          <div className="alert collapse bg-pink-it">

            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title bg-green-500">
              <p>{faqsState[index].title}</p>
            </div>

            <div id={index.toString()} className="collapse-content w-full col-span-2"> 
              <p id="description">{faqsState[index].description}</p>

              {showSaveButtons === index.toString() &&
                <div className="flex justify-end mt-6 mb-2 mr-4">
                  <button className="mx-4 py-2 px-6 border-gray-500" onClick={() => cancelEditContent(index, faqsState[index].description)}>Cancelar</button>
                  <button className="py-2 px-6 bg-pink-it text-white" onClick={() => setShowEditButtons(true)}>Guardar</button>
                </div>
              }

            </div>

            {showEditButtons &&
              <div className="flex justify-self-end items-center bg-orange-500">
                <button className="mx-2 px-4 border-gray-500 h-[30px]" onClick={() => {
                  editableContent(index.toString())
                  }}
                  >Editar</button>
                  
                <img src={deleteFaqIcon} className='h-[30px] cursor-pointer' onClick={() => {setOpenModal(true)}} alt="locker"/>
                {openModal && <DeleteFaqModal closeModal={setOpenModal} faqId={faq.id} acces_token={acces_token} dispatch={dispatch}/>}

              </div>
            }


          </div>

        </div>
      ))}
    </div>
  );
};
export default FAQs;
