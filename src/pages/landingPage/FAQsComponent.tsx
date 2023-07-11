import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import FaqsModified from "./FaqsModified";
import { apiCall,deleteApiFaqs } from "../../store/reducers/faqsCall/faqsReducer";


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
    <div className={`collapse rounded-md ${'mb-5'  // Agrega mb-5 si no es el último elemento
      } shadow-xl`} key={index}>
      
      <div className="alert collapse">

        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title">
          {faq.title}
        </div>

        <div className="collapse-content w-full col-span-2"> 
          <p>{faq.description}</p>
        </div>

        <div className="justify-self-end">
          <button className="btn btn-sm">Editar</button>
          <button className="btn btn-sm btn-primary">Delete</button>
        </div>

      </div>

    </div>
  ))}
</div>
  );
};
export default FAQs;
