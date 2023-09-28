declare global {
    interface Window {
      my_modal_2: {
        showModal: () => void;
      };
    }
}

const CreateApp = () => {
  return (
    <div className="bg-blue-400">
        <button
        onClick={() => {
            window.my_modal_2?.showModal();
        }}
        className="w-full h-full rounded-3xl"
        >
        Añadir nuevo
        </button>
    </div>
  )
}

export default CreateApp