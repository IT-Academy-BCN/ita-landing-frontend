import { useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { handleReset } from "../store/reducers/apiCall/apiResetPassword";
import cross from "../assets/img/cross.png";

const ResetPasswordPage = () => {
  const dispatch = useDispatch()
  const navegador = useNavigate();
  const { token } = useParams();

  const [newPassword, setNewPassword] = useState("");
  const [newConfirmationPassword, setNewConfirmationPassword] = useState("");

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    handleReset(dispatch, e, navegador, newPassword, newConfirmationPassword, token)
  }

  return (
    <div>
      <div
        className={`w-80 rounded-xl bg-white border-2 `}
      >
        <div className="p-3 flex ">
          <img
            src={cross}
            className=" cursor-pointer w-3 ml-auto "
            alt="X"
          />
        </div>
        <div className="flex flex-col justify-evenly h-72 px-5 py-0">
          <h1 className="text-center font-bold text-xl">
            Nueva Contraseña
          </h1>
          <form onSubmit={handleResetPassword}>
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
    </div>
  )
}

export default ResetPasswordPage