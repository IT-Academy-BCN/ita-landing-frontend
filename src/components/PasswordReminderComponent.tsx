import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import cross from "../assets/img/cross.png";
import { ChildComponentProps, FormDataEvent } from "../interfaces/interfaces";
import { handleSubmit } from "../store/reducers/apiCall/apiResetPassword";
import { RootState } from '../store/store';

const PasswordReminderComponent = ({
  setIsPasswordReminder,
}: ChildComponentProps) => {

  const dispatch = useDispatch()

  const [tryRequest, setTryRequest] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleReopenModal = () => {
    setEmail("")
    setTryRequest(false)
  }

  const handleCloseModal = () => {
    setTryRequest(false)
    setIsPasswordReminder(false)
  }

  const submitInformation = async (e: FormDataEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try{
      await handleSubmit(dispatch, email)
      setIsLoading(false)
      setTryRequest(true)
    }catch(error){
      console.error(error)
    }
  }
  const requestStatus = useSelector((state: RootState) => state.apiSliceResetPassword.requestStatus)

  return (
    <>
      {!tryRequest &&
        <div>
          <div
            className={`absolute z-50 right-0 top-full mt-6 w-80 rounded-xl bg-white border-2 `}
          >
            <div className="p-3 flex ">
              <img
                onClick={handleCloseModal}
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
                  {isLoading===false ? "Recordar contraseña" : <span className="loading loading-spinner loading-md"></span> }
                </button>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      }

      {tryRequest && requestStatus === '404' &&
        <div>
          <div
            className={`absolute z-50 right-0 top-full mt-6 w-80 rounded-xl bg-white border-2 `}
          >
            <div className="p-3 flex ">
              <img
                onClick={handleCloseModal}
                src={cross}
                className=" cursor-pointer w-3 ml-auto "
                alt=""
              />
            </div>
            <div className="flex flex-col  justify-evenly h-60 px-5 py-0">
              <h1 className="text-center font-bold text-xl">
                Recordar contraseña
              </h1>
              <p className="text-sm">Esta dirección de correo no está vinculada a ninguna cuenta</p>
              <button className="btn btn-error" onClick={handleReopenModal}>Volver a intentar</button>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      }


      {tryRequest && requestStatus === '200' &&

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
              <p className="text-sm">Un link ha sido enviado a tu correo para crear una nueva contraseña</p>
              <button className="btn btn-success" onClick={() => setIsPasswordReminder(false)}>De acuerdo</button>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>

      }

    </>
  );
};

export default PasswordReminderComponent;
