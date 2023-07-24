import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../../../store/store";
import FaqsModified from "../../../backOffice/components/faqsAdminView/FaqsModified";
import { apiCall,deleteApiFaqs } from "../../../../store/reducers/faqsCall/faqsReducer";


const FAQs = () => {
  //Interfaces//
  interface Faq {
    title: string;
    description: string;
    id:number;
  }

  interface createToken {
    acces_token: string;  
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
  },[dispatch])

 
  return (

    
    
    <div className="w-3/4 m-auto ">
        <div className="grid grid-cols-6 grid-rows-2">
    <h2 className="font-black text-2xl font-poppins  text-center col-span-6">
      Preguntas frecuentes
    </h2>
  </div>

    {
      window.location.pathname =='/backoffice'&&(
        <FaqsModified/>
      )
    }
  {faqs.map((faq:Faq, index:number) => (
    <div
      className={`collapse rounded-md ${
         'mb-5'  // Agrega mb-5 si no es el último elemento
      } shadow-xl`}
      key={index}
    >
      <input type="checkbox" className="peer" />
      <div className="collapse-title absolute  rounded-b-md bg-white text-left text-black text-4 font-poppins font-bold peer-checked:bg-[#BA007C] peer-checked:rounded-b-[0px] peer-checked:text-secondary-content text-4 font-poppins font-bold">
        {faq.title}
      </div>
      <div className="collapse-content rounded-b-md bg-white">
        <p className="text-left text-black  text-4 font-poppins font-medium ml-9 mr-24 mt-9 mb-6">
          {faq.description}
        </p>
        
        {window.location.pathname == '/backoffice' && (<div className="flex justify-end mr-20 pb-7">
        
        <button className="mr-5 xl:px-7 btn btn-outline-primary border-gray-600 bg-transparent text-gray-600" onClick={()=> deleteApiFaqs(faq.id,acces_token,dispatch)}>Eliminar</button>
        <button className="btn xl:px-9  bg-pink-it text-white">Guardar</button>

    </div>)}

      </div>
    </div>
  ))}
</div>
  );
};
export default FAQs;
