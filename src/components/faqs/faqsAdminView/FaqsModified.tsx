import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postApiFaqs } from "../../../store/reducers/faqsCall/faqsReducer";
import { createToken } from "../../../interfaces/interfaces";
export default function FaqsModified() {
  const { acces_token }: createToken = useSelector(
    (state: RootState) => state.apiPostRegister
  );
  //constantes para el set //
  const dispatch = useDispatch();

  const [faqsContent, setFaqsContent] = useState<{
    title: string;
    description: string;
  }>({
    title: "",
    description: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleClosed = () => {
    setIsOpen(false)
    setFaqsContent({ title: "", description: "" })
  }
  const handleCreated = () => {
    postApiFaqs(faqsContent, acces_token, dispatch)
    setIsOpen(false)
    setFaqsContent({ title: "", description: "" })
  }

  return (
    <>
      <div className={`collapse collapse-arrow border-2 border-dashed mb-6 ${isOpen ? 'collapse-open' : 'collapse-close'}`}>
        <input type="checkbox" className={`${isOpen ? 'z-0' : ''}`} onClick={() => setIsOpen(true)} /> 
        <div className={`collapse-title relative text-start font-bold text-[#7e7e7e] ${isOpen ? 'text-white bg-[#BA007C] z-10' : ''}`}>
          {isOpen ? <input type="text" className="z-20 text-black input input-bordered" onChange={(e) => setFaqsContent({ ...faqsContent, title: e.target.value })} value={faqsContent.title}/> : <p className="z-10 lg:text-justify sm:text-center max-w-[75%]">Crear nueva pregunta</p>}
        </div>
        <div className="collapse-content">
          <textarea className="outline-none resize-none pt-4 w-full" placeholder="Respuesta" onChange={(e) => setFaqsContent({ ...faqsContent, description: e.target.value })} value={faqsContent.description}></textarea>
          <div className="flex justify-end items-center">
            <button className="py-2 px-8 mr-4 mb-2 text-sm text-[#7e7e7e] border border-[#7e7e7e]" onClick={handleClosed}>Cancelar</button>
            <button className="py-2 px-8 mr-4 mb-2 text-sm text-white bg-[#BA007C]" onClick={handleCreated}>Crear</button>
          </div>
        </div>
      </div>
    </>
  );
}
