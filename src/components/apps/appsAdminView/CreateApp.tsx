import plusIcon from "../../../assets/img/plus.svg"

declare global {
    interface Window {
      my_modal_2: {
        showModal: () => void;
      };
    }
}

const CreateApp = () => {
  return (
    <div className="mx-5 my-3">
      <button
      onClick={() => {
          window.my_modal_2?.showModal();
      }}
      className="flex w-full h-56 md:h-full justify-center items-center rounded-xl border-dashed border-2 border-[#7e7e7e]"
      >
      <img src={plusIcon} alt="+" className="w-6" />
      <p className="ml-2 font-bold text-[#7e7e7e]">Crear nueva app</p>
      </button>
    </div>
  )
}

export default CreateApp