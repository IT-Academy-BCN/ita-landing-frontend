import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import cross from "../assets/img/cross.png";
import { ChildComponentProps, FormDataEvent } from "../interfaces/interfaces";
import { handleSubmit } from "../store/reducers/apiCall/apiResetPassword";

const PasswordReminderComponent = ({
  setIsPasswordReminder,
}: ChildComponentProps) => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState("");

  const submitInformation = (e: FormDataEvent) => {
    e.preventDefault()
    handleSubmit(dispatch, email)
  }

  // const emailSendIt = useSelector((state) => state.apiSliceResetPassword.emailSendIt)

  return (
    <>
      <div>
        <div
          className={`absolute z-50 right-0 top-full mt-6 w-80 rounded-xl bg-white border-2 `}
        >
          <div className="p-3 flex ">
            <img
              onClick={() => setIsPasswordReminder(false)}
              src={cross}
              className=" cursor-pointer w-3 ml-auto "
              alt=""
            />
          </div>
          <div className="flex flex-col  justify-evenly h-60 px-5 py-0  ">
            <h1 className="text-center font-bold text-xl">
              Recordar contraseña
            </h1>
            <form onSubmit={submitInformation}>
              <input
                type="email"
                name="email"
                className="input input-bordered placeholder-black w-full max-w-xs"
                placeholder="Dirección de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Actualiza el estado con el valor del campo de entrada
              />

              <button
                type="submit"
                className="mt-5 btn btn-block normal-case bg-pink-it text-white"
              >
                <p>Recordar contraseña</p>
              </button>
            </form>
          </div>
        </div>

        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </>
  );
};

export default PasswordReminderComponent;
