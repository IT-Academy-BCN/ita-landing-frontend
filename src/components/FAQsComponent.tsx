import  {useState} from "react";
import data from "../mock-FAQS-data.json";


const FAQs = () => {

    const [ MultipleFaqs, setMultipleFaqs] = useState(data);

    return (
        <div>
            <div className="grid grid-cols-6 grid-rows-2">
                <h2 className="font-black text-[35px] font-poppins  text-center col-span-6">
                Preguntas frecuentes
                </h2>
            </div>
            {MultipleFaqs.map((faq)=>
            <div className="collapse  rounded-md pb-2 shadow-[0_0px_2px_12px_rgba(0,0,0,0.1)]">
                <input type="checkbox" className="peer" />
                <div className="collapse-title absolute  rounded-b-md bg-[#FFFF] text-left text-[#000000] text-[16px] font-poppins font-bold peer-checked:bg-[#BA007C] peer-checked:rounded-b-[0px] peer-checked:text-secondary-content text-[16px] font-poppins font-bold ">
                {faq.title}
                </div>
                <div className="collapse-content rounded-b-md bg-[#FFFF]">
                    <p className= "text-left text-[#000000]  text-[16px] font-poppins font-medium ml-[36px] mr-[90px] mt-[34px] mb-[23px]"> 
                    {faq.answer}
                    </p>
                </div>
            </div>
            )}
        </div>

    )


}
export default FAQs; 
