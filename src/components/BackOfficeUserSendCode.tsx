import { useState, useRef, useEffect } from "react"
import resetIcon from "../assets/img/reset.svg"
import checkIcon from "../assets/img/confirmationIcon.svg"
import errorIcon from "../assets/img/error.svg"
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

  const handleSendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
        }, 2000);

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
    inputRef.current?.focus();
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
            <div className="flex items-center justify-items-center">
              <img src={checkIcon} className="w-6" alt="OK" />
              <p className="ml-2 font-bold normal-case"> Email enviado </p>
            </div>
          ) : showAlert === true && requestStatus!=='200' ? (
            <div className="flex items-center justify-items-center">
              <img src={errorIcon} className="w-6" alt="Error" />
              <p className="ml-2 font-bold normal-case"> Email no enviado </p>
            </div>) :
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
          <p className="text-xs lg:w-1/3 w-1/2 mt-4 text-red-600">No se ha podido realizar la operación. Por favor, inténtelo más tarde</p>
        }
      </div>
    </section>
  )
}

export default BackOfficeUserSendCode