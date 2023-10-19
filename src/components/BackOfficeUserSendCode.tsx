import { useState, useRef } from "react"
import resetIcon from "../assets/img/reset.svg"

const BackOfficeUserSendCode = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [colorInput, setColorInput] = useState("input-secondary");
  const [colorButton, setColorButton] = useState('bg-[#BA007C]');
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [desactivateInput, setdesactivateInput] = useState(false);

  const validateEmail = (email:string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email)
  }

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setdesactivateInput(true)
      setError("none-error");
      setColorInput('input-success')
      setColorButton('btn-success')

    } else {
      setError("ERROR");
      setColorInput('input-error')
      setColorButton('btn-error')
    }
  };

  const handleResetEmail = (resetEmail:string) => {
    resetEmail === 'reset-email' ? setEmail("") : ''
    setError("");
    setColorInput('input-secondary')
    setColorButton('bg-[#BA007C]')
    inputRef.current.focus();
  }

  return (
    <section className="flex flex-col place-items-center bg-white rounded-md mx-6 lg:px-10 pb-5">
      <h1 className="py-10 text-3xl font-bold">Invitar nuev@ admin</h1>
      <input
        type="email"
        ref={inputRef}
        disabled={desactivateInput}
        onFocus={() => handleResetEmail('no-reset-email')}
        placeholder="Dirección de email"
        className={`flex my-8 input input-bordered ${colorInput} w-2/3 max-w-xs`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex w-2/3">
        <button className={`btn w-full ${colorButton} text-white`} onClick={handleSubmit}>
          {error === '' ? <span>Invitar</span> : (error === "ERROR" ? <span>ERROR</span> : <span className="loading loading-spinner"></span>)}
        </button>
        {error === "ERROR" && (
          <button className="btn btn-square btn-neutral ml-2" onClick={() => handleResetEmail('reset-email')}>
            <img src={resetIcon} className="w-8" alt="resetIcon" />
          </button>
        )}
      </div>
    </section>
  )
}

export default BackOfficeUserSendCode