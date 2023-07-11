// import { apiCall,deleteApiFaqs } from "../../../store/reducers/faqsCall/faqsReducer";
import locker from '../../../images/locker.png';


function DeleteFaqModal({closeModal}) {
    return (
        <div className="">
            <div className="modal modal-open">
                <div className="modal-box flex flex-col items-center justify-center">
                    
                    <button className='justify-self-end	self-end' onClick={() => closeModal(false)}>X</button>

                    <img src={locker} className='h-[118px]' alt="locker"/>

                    <h1 className='text-2xl font-semibold'>¿Estás segur@?</h1>
                    <p className='max-w-[70%] text-center my-4'>Esta acción eliminará el elemento seleccionado</p>

                    <button className="bg-pink-it min-w-[60%] py-2 mb-4 text-white"> Eliminar </button>

                    <button className="min-w-[60%] py-2 mb-4 border-gray-500" onClick={() => closeModal(false)}> Cancelar </button>

                </div>
            </div>
        </div>
    );
  }
  export default DeleteFaqModal;