import { useState, useRef, useEffect } from "react"
import resetIcon from "../assets/img/reset.svg"
import checkIcon from "../assets/img/confirmationIcon.svg"
import { handleSubmit } from "../store/reducers/apiCall/apiSendCodeByEmail";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { createToken } from "../interfaces/interfaces";
import { AdminButtons } from "./faqs/faqsAdminView/AdminButtons";

const BackOfficeUserSendCode = () => {

  const dispatch = useDispatch()

  const { acces_token }: createToken = useSelector(
    (state: RootState) => state.apiPostRegister
  );

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [colorInput, setColorInput] = useState("input-secondary");
  const [colorButton, setColorButton] = useState('bg-[#BA007C]');
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [desactivateInputElements, setDesactivateInputElements] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const requestStatus = useSelector((state: RootState) => state.apiSendCodeByEmail.requestStatus);

  const validateEmail = (email:string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ 
    return emailPattern.test(email)
  }

  const handleSendEmail = async (e: FormDataEvent) => {
    if (validateEmail(email)) {
      setDesactivateInputElements(true)
      setError("none-error");

      e.preventDefault()
      try{
        await handleSubmit(dispatch, email, acces_token)
        setShowAlert(true)    
        // requestStatus === '200' ? (setColorButton('btn-success'),  setColorInput('input-success'), console.log('dentro')) : (setColorButton('btn-error'), setColorInput('input-error'), console.log('fuera'))

        setTimeout(() => {
          handleResetEmail("reset-email")
          setShowAlert(false);
        }, 200000);

      }catch(error){
        handleResetEmail("reset-email")
        console.error(error)
      }

    } else {
      setError("ERROR");
      setColorInput('input-error')
      setColorButton('btn-error')
    }
  };
  
  const handleResetEmail = (resetEmail:string) => {
    resetEmail === 'reset-email' ? setEmail("") : ''
    setDesactivateInputElements(false)
    setError("");
    setColorInput('input-secondary')
    setColorButton('bg-[#BA007C]')
    setShowAlert(false)
    inputRef.current.focus();
  }

  useEffect(() => {
    if(requestStatus === '200' && showAlert===true) {
      setColorButton('btn-success')
      setColorInput('input-success')
    }else if(requestStatus === '404' && showAlert===true){
      setColorButton('btn-error')
      setColorInput('input-error')
    }else{
      handleResetEmail("reset-email")
    }
  }, [showAlert])
    
  return (
    <section className="lg:px-10 h-full flex flex-col">

      <div className="w-full hidden lg:block">
        <AdminButtons />
      </div>

      <div className="flex flex-col place-items-center bg-white rounded-md h-full mb-10">
        <h1 className="md:col-span-2 lg:col-span-3 font-black py-12 text-3xl font-poppins sm:text-center lg:text-left">Invitar nuev@ admin</h1>
        <input
          type="email"
          ref={inputRef}
          disabled={desactivateInputElements}
          onFocus={() => handleResetEmail('no-reset-email')}
          placeholder="Dirección de email"
          className={`flex my-8 input input-bordered ${colorInput} w-2/3 max-w-xs`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex w-1/3">
          <button   className={`btn w-full ${colorButton} text-white ${colorButton === 'btn-success' || colorButton === 'btn-error' ? 'pointer-events-none' : ''}`} onClick={handleSendEmail}>
          {error === '' ? (
            <span>Invitar</span>
          ) : error === "ERROR" ? (
            <span>Email inválido</span>
          ) : showAlert === true && requestStatus==='200' ? (
            <img src={checkIcon} className="w-8" alt="OK" />
          ) : showAlert === true && requestStatus!=='200' ? (
            <p className="font-bold text-lg">Error http</p>
          ) :
          (
            <span className="loading loading-spinner"></span>
          )}

          </button>
          {error === "ERROR" && (
            <button className="btn btn-square btn-neutral ml-2" onClick={() => handleResetEmail('reset-email')}>
              <img src={resetIcon} className="w-8" alt="resetIcon" />
            </button>
          )}
        </div>
        {showAlert===true && requestStatus!=='200' &&
          <p className="text-xs w-1/3 mt-4 text-red-600">No se ha podido realizar la operación. Por favor, inténtelo más tarde</p>
        }

        {showAlert && requestStatus==='200' && (
          <>
            <button className="alert alert-success absolute right-20 w-fit mt-6 p-4" onClick={() => handleResetEmail("reset-email")}>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>¡Email enviado!</span>
            </button>
          </>
        )}
        {showAlert && requestStatus!=='200' && (
          <div className="flex place-items-end justify-center">
            <button className="alert alert-error absolute w-fit lg:right-20 lg:mt-6 lg:p-4" onClick={() => handleResetEmail("reset-email")}>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>¡Email no enviado!</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default BackOfficeUserSendCode