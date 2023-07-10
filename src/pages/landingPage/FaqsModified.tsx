
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { postApiFaqs } from '../../store/reducers/faqsCall/faqsReducer';
export default function FaqsModified() {

    //Interfaces//
    interface createToken {
        acces_token: String;  
      } 
      const { acces_token }: createToken = useSelector(
        (state: RootState) => state.apiPostRegister
      );
        //constantes para el set //
      const dispatch = useDispatch();

      let [booleanFaqs, setBooleanFaqs] = useState<boolean>(false);
      
      const [faqsContent, setFaqsContent] = useState<{ title: string, description: string }>({
        title: '',
        description: ''
      });
      
  return (
    <>
      <div className={"collapse rounded-xl mb-5 border-4 border-dashed"}>
      <input onClick={()=> setBooleanFaqs(booleanFaqs = !booleanFaqs)} type="checkbox" className="peer" />
      <div className=" p-5 absolute rounded-b-md bg-white text-left text-gray-500 text-4 font-poppins font-bold   peer-checked:rounded-b-[0px]   text-4 font-poppins">
          Crear nueva pregunta
      </div>
  </div>

  {
    booleanFaqs == true &&( <div
    className={`  rounded-md ${
      'mb-5'  // Agrega mb-5 si no es el último elemento
    } shadow-xl`}
    
  >
     <div className=" rounded-b-md  text-left    font-poppins font-bold  bg-[#BA007C]  rounded-b-[0px]    text-4 font-poppins font-bold w-100">
      <input  onChange={(e) => setFaqsContent({ ...faqsContent, title: e.target.value })} value={faqsContent.title} type="text" placeholder="Crea tu pregunta" className="placeholder-white bg-transparent text-white  p-4 w-full focus:border-0 focus:outline-none"  />
    </div>
    <div className=" rounded-b-md bg-white border-dashed active:border-0">
      <textarea placeholder="Respuesta" onChange={(e) => setFaqsContent({ ...faqsContent, description: e.target.value })} value={faqsContent.description} className="resize-none p-5 focus:border-0 focus:outline-none text-black  text-4 font-poppins font-medium    w-full"/>
    </div>
    <div className="flex justify-end mr-20 pb-7">
        
        <button className="mr-5 xl:px-7 btn btn-outline-primary border-gray-600 bg-transparent text-gray-600" onClick={()=>{setBooleanFaqs(false)}}>Cancelar</button>
        <button className="btn xl:px-9  bg-pink-it text-white" onClick={()=>{postApiFaqs(faqsContent,acces_token,dispatch); setFaqsContent({title:'',description:''}); setBooleanFaqs(false)}}>Crear</button>

    </div>
  </div>)} 
    </>
)
}
