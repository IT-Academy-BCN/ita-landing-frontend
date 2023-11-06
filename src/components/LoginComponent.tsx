import cross from "../assets/img/cross.png";
import { useNavigate } from "react-router-dom";
import {
  handleSubmit,
  eraseMessageError,
  passwordReminderReducer,
} from "../store/reducers/apiCall/apiPostRegisterLogin";
import { useDispatch, useSelector } from "react-redux";
import {
  ChildComponentProps,
  RootState,
  ApiPostRegisterState,
  FormDataEvent,
} from "../interfaces/interfaces";
import { useTranslation } from "react-i18next";


export default function LoginComponent({
  setIsDropdownEnterButton,
  setisDropdownCuenta,
  setIsPasswordReminder,
}: ChildComponentProps) {
  const [t] = useTranslation();
  const navegador = useNavigate();
  const dispatch = useDispatch();

  const { messageError, isLoadingMessageError }: ApiPostRegisterState =
    useSelector((state: RootState) => state.apiPostRegister);

  const submitInformation = (e: FormDataEvent) => {
    handleSubmit(dispatch, e, 2, navegador);
  };

  return (
    <>
      <div>
        <div
          className={`absolute z-50 right-0 top-full mt-6 w-80 rounded-xl bg-white border-2 `}
        >
          <div className="p-3 flex ">
            <img
              onClick={() => setIsDropdownEnterButton(false)}
              src={cross}
              className=" cursor-pointer w-3 ml-auto "
              alt=""
            />
          </div>
          <div className="flex flex-col  justify-evenly h-80 px-5 py-0  ">
            <h1 className="text-start">{t('landingPage.loginModal.login')}</h1>
            <form onSubmit={submitInformation}>
              <input
                type="text"
                name="dni"
                className="input input-bordered w-full max-w-xs"
                placeholder={t('landingPage.loginModal.dniInput')}
              />

              <input
                type="password"
                name="password"
                className="input input-bordered w-full max-w-xs mt-4"
                placeholder={t('landingPage.loginModal.passwordInput')}
              />

              <a className="text-xs text-end">
                <span
                  className="border-b-2 border-black"
                  onClick={() => {
                    dispatch(
                      passwordReminderReducer({
                        type: "SHOW_PASSWORD_REMINDER",
                      })
                    );
                    dispatch(eraseMessageError());
                    setIsDropdownEnterButton(false);
                    setisDropdownCuenta(false);
                    setIsPasswordReminder(true);
                  }}
                >
                  {t('landingPage.loginModal.changePassword')}
                </span>
              </a>

              <button
                type="submit"
                className="mt-5 btn btn-block bg-pink-it text-white"
              >
                {/* Icono de carga */}
                {!isLoadingMessageError ? (
                  <p className="mt-0">{messageError}</p>
                ) : (
                  <span className="loading loading-spinner loading-md"></span>
                )}
                {!isLoadingMessageError && <p>{t('landingPage.loginModal.login')}</p>}
              </button>
            </form>
            <a className="text-xs mt-5 ">
              <span
                onClick={() => {
                  dispatch(eraseMessageError());
                  setIsDropdownEnterButton(false), setisDropdownCuenta(true);
                }}
                className="border-b-2 border-black"
              >
                {t('landingPage.loginModal.registerMessage')}
              </span>
            </a>
          </div>
        </div>

        <div
          onClick={() => {
            setIsDropdownEnterButton(false);
            dispatch(eraseMessageError());
          }}
          className="opacity-25 fixed inset-0 z-40 bg-black"
        ></div>
      </div>
    </>
  );
}
