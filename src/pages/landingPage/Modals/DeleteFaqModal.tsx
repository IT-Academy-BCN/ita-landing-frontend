import { deleteApiFaqs } from "../../../store/reducers/faqsCall/faqsReducer";
import locker from '../../../images/locker.png';

interface DeleteFaqModalProps{
    deleteModal: (flag: boolean) => void;
    faqId: number;
    acces_token: string;
    dispatch: any;
  }

function DeleteFaqModal({ deleteModal, faqId, acces_token, dispatch }: DeleteFaqModalProps) {
    console.log(faqId)
    return (
        <div className="modal modal-open">
            <div className="modal-box flex flex-col items-center justify-center">
                
                <button className='justify-self-end	self-end' onClick={() => deleteModal(false)}>X</button>

                <img src={locker} className='h-[118px]' alt="locker"/>

                <h1 className='text-2xl font-semibold text-black'>¿Estás segur@?</h1>
                <p className='max-w-[70%] text-center my-4 text-black'>Esta acción eliminará el elemento seleccionado</p>

                <button className="bg-pink-it min-w-[60%] py-2 mb-4 text-white" onClick={()=> deleteApiFaqs(faqId, acces_token, dispatch)}> Eliminar </button>

                <button className="min-w-[60%] py-2 mb-4 border-gray-500 text-black" onClick={() => deleteModal(false)}> Cancelar </button>

            </div>
        </div>
    );
  }
  export default DeleteFaqModal;