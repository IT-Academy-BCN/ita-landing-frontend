import { useState, useRef, useEffect } from "react";
// import resetIcon from "../assets/img/reset.svg";
import checkIcon from "../assets/img/confirmationIcon.svg";
import errorIcon from "../assets/img/error.svg";
import { handleSubmit } from "../store/reducers/apiCall/apiSendCodeByEmail";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { createToken } from "../interfaces/interfaces";
import { AdminButtons } from "./faqs/faqsAdminView/AdminButtons";
import { useTranslation } from "react-i18next";

const BackOfficeUserSendCode = () => {
  const [t] = useTranslation();
  const dispatch = useDispatch();

  const { acces_token }: createToken = useSelector(
    (state: RootState) => state.apiPostRegister
  );

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [colorButton, setColorButton] = useState("bg-[#BA007C]");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [desactivateInputElements, setDesactivateInputElements] =
    useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const requestStatus = useSelector(
    (state: RootState) => state.apiSendCodeByEmail.requestStatus
  );

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (validateEmail(email)) {
      setDesactivateInputElements(true);
      setError("none-error");
      setIsLoading(true);

      e.preventDefault();
      try {
        await handleSubmit(dispatch, email, acces_token);
        setShowAlert(true);

        setTimeout(() => {
          handleResetEmail("reset-email");
          setIsLoading(false);
          setShowAlert(false);
        }, 2000);
      } catch (error) {
        handleResetEmail("reset-email");
        console.error(error);
      }
    } else {
      setError("ERROR");
      setColorButton("btn-error");
    }
  };

  // when we focus on the input this happens
  const handleResetEmail = (resetEmail: string) => {
    resetEmail === "reset-email" ? setEmail("") : "";
    setDesactivateInputElements(false);
    setError("");
    setColorButton("bg-pink-it");
    setShowAlert(false);
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (requestStatus === "200" && showAlert === true) {
      setColorButton("btn-success");
    } else if (requestStatus === "404" && showAlert === true) {
      setColorButton("btn-error");
    } else {
      handleResetEmail("reset-email");
    }
  }, [showAlert]);

  return (
    <section className="lg:px-10 h-full flex flex-col">
      <div className="w-full hidden lg:block">
        <AdminButtons />
      </div>

      <div className="flex flex-col place-items-center bg-white rounded-xl h-full mb-10">
        <h1 className="font-black py-12 text-3xl mt-28">
          {t("backofficePage.usersComponent.title")}
        </h1>
        <input
          type="email"
          ref={inputRef}
          disabled={desactivateInputElements}
          onFocus={() => handleResetEmail("no-reset-email")}
          placeholder={t("backofficePage.usersComponent.emailInput")}
          className={`my-8 input border border-neutral-300 focus:outline-none w-2/3 max-w-xs`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex w-2/3 max-w-xs">
          <button
            className={`btn w-full ${colorButton} text-white ${
              isLoading ? "pointer-events-none" : ""
            }`}
            onClick={handleSendEmail}
          >
            {error === "" ? (
              `${t("backofficePage.usersComponent.buttonTitle")}`
            ) : error === "ERROR" ? (
              `${t("backofficePage.usersComponent.emailIncorrect")}`
            ) : showAlert && requestStatus === "200" ? (
              <div className="flex items-center justify-items-center">
                <img src={checkIcon} className="w-6" alt="OK" />
                <p className="ml-2 font-bold normal-case">
                  {t("backofficePage.usersComponent.emailSendIt")}
                </p>
              </div>
            ) : showAlert && requestStatus !== "200" ? (
              <div className="flex items-center justify-items-center">
                <img src={errorIcon} className="w-6" alt="Error" />
                <p className="ml-2 font-bold normal-case">
                  {t("backofficePage.usersComponent.emailNotSendIt")}
                </p>
              </div>
            ) : (
              <span className="loading loading-spinner"></span>
            )}
          </button>
        </div>

        {error === "ERROR" && (
          <p className="text-base w-2/3 max-w-xs mt-4 text-red-600">
            No se ha podido realizar la operación. Por favor, inténtelo más
            tarde
          </p>
        )}
      </div>
    </section>
  );
};

export default BackOfficeUserSendCode;
