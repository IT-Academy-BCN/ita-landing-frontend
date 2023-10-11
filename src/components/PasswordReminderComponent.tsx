import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import cross from "../assets/img/cross.png";
import { ChildComponentProps, FormDataEvent } from "../interfaces/interfaces";
import { handleSubmit, handleReset } from "../store/reducers/apiCall/apiResetPassword";
import { RootState } from '../store/store';

const PasswordReminderComponent = ({
  setIsPasswordReminder,
}: ChildComponentProps) => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [newConfirmationPassword, setNewConfirmationPassword] = useState("");

  const submitInformation = (e: FormDataEvent) => {
    e.preventDefault()
    handleSubmit(dispatch, email)
  }
  const emailSendIt = useSelector((state: RootState) => state.apiSliceResetPassword.emailSendIt)

  const handleResetPassword = (e: FormDataEvent) => {
    handleReset(dispatch, e, newPassword, newConfirmationPassword, resetToken)
  }


  return (
    <>
      {!emailSendIt && 
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
            <div className="flex flex-col  justify-evenly h-60 px-5 py-0">
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
                  onChange={(e) => setEmail(e.target.value)}
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
      }
      {emailSendIt &&

        <div>
          <div
            className={`absolute z-50 right-0 top-full mt-6 w-80 rounded-xl bg-white border-2 `}
          >
            <div className="p-3 flex ">
              <img
                src={cross}
                className=" cursor-pointer w-3 ml-auto "
                alt=""
              />
            </div>
            <div className="flex flex-col justify-evenly h-72 px-5 py-0">
              <h1 className="text-center font-bold text-xl">
                Nueva Contraseña
              </h1>
              <form onSubmit={handleResetPassword}>
                <input
                  type="name"
                  name="token"
                  className="input input-bordered placeholder-[#7D7C7C] w-full max-w-xs mb-5"
                  placeholder="Inserte su token"
                  onChange={(e) => setResetToken(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  className="input input-bordered placeholder-[#7D7C7C] w-full max-w-xs mb-5"
                  placeholder="Nueva contraseña"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                  type="password"
                  name="password_confirmation"
                  className="input input-bordered placeholder-[#7D7C7C] w-full max-w-xs"
                  placeholder="Repetir nueva contraseña"
                  onChange={(e) => setNewConfirmationPassword(e.target.value)}
                />

                <button
                  type="submit"
                  className="mt-5 btn btn-block normal-case bg-pink-it text-white"
                >
                  <p>Modificar contraseña</p>
                </button>
              </form>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>

      }

    </>
  );
};

export default PasswordReminderComponent;
