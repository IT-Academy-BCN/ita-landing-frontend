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
        className="w-full h-full rounded-3xl bg-blue-400"
        >
        Añadir nuevo
        </button>
    </div>
  )
}

export default CreateApp