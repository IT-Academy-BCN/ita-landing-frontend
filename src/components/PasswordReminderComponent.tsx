import cross from "../assets/img/cross.png";
import { ChildComponentProps } from "../interfaces/interfaces";
import { RootState } from "../store/store";
import {
  setEmail,
  setEmailMessage,
} from "../store/reducers/apiCall/apiPostRegisterLogin";
import { useSelector, useDispatch, connect } from "react-redux";

const PasswordReminderComponent = ({
  setIsPasswordReminder,
}: ChildComponentProps) => {
  const email = useSelector((state: RootState) => state.apiPostRegister.email);
  const emailMessage = useSelector(
    (state: RootState) => state.apiPostRegister.emailMessage
  );

  const dispatch = useDispatch();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/forget-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        dispatch(setEmailMessage("Password reminder email sent successfully."));
        console.log(emailMessage);
      } else {
        dispatch(
          setEmailMessage("Failed to send the email. Please try again later.")
        );
        console.log(emailMessage);
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch(setEmailMessage("An error occurred. Please try again later."));
    }
  };

  return (
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
          <h1 className="text-center font-bold text-xl">Recordar contraseña</h1>
          <form onSubmit={handleFormSubmit}>
            <input
              type="email"
              name="email"
              className="input input-bordered placeholder-black w-full max-w-xs"
              placeholder="Dirección de email"
              value={email}
              onChange={handleEmailChange}
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
  );
};

const mapStateToProps = (state: RootState) => ({
  showPasswordReminder: state.apiPostRegister.showPasswordReminder,
});

export default connect(mapStateToProps, { setEmail })(
  PasswordReminderComponent
);
