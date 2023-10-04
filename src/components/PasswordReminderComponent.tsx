import cross from "../assets/img/cross.png";
import { ChildComponentProps } from "../interfaces/interfaces";

const PasswordReminderComponent = ({
  setIsPasswordReminder,
}: ChildComponentProps) => {
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
            <form>
              <input
                type="email"
                name="email"
                className="input input-bordered placeholder-black w-full max-w-xs"
                placeholder="Dirección de email"
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
