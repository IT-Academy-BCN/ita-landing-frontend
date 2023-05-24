import data from "../mock-FAQS-data.json";

const FAQs = () => {
  return (
    <div>
      <div className="grid grid-cols-6 grid-rows-2">
        <h2 className="font-black text-[35px] font-poppins  text-center col-span-6">
          Preguntas frecuentes
        </h2>
      </div>
      {data.map((faq) => (
        <div className="collapse  rounded-md mb-5 shadow-xl">
          <input type="checkbox" className="peer" />
          <div className="collapse-title absolute  rounded-b-md bg-white text-left text-black text-4 font-poppins font-bold peer-checked:bg-[#BA007C] peer-checked:rounded-b-[0px] peer-checked:text-secondary-content text-4 font-poppins font-bold ">
            {faq.title}
          </div>
          <div className="collapse-content rounded-b-md bg-white">
            <p className="text-left text-black  text-4 font-poppins font-medium ml-9 mr-24 mt-9 mb-6">

              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FAQs;
