import plusIcon from "../../../assets/img/plus.svg";
import userIcon from "../../../assets/img/user.svg";
import { useDispatch } from "react-redux";
import { setIsLogged } from "../../../store/reducers/apiCall/apiPostRegisterLogin";

export const AdminButtons = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setIsLogged(false));
  };

  return (
    <>
      <div className="flex w-auto justify-end items-center lg:bg-backOffice-main py-2 relative">

        <button
          className="flex items-center justify-center ml-1 w-12 h-10 rounded-lg bg-backOffice-main lg:bg-white  cursor-pointer"
          onClick={() => {
            if (document) {
              (
                document.getElementById("logoutModal") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          <img src={userIcon} alt="userIcon" className="w-8" />
        </button>
        {/* The modal in question */}
        <dialog id="logoutModal" className="modal">
          <button
            className="modal-box absolute top-20 right-16 lg:right-12 w-48 py-3 font-bold shadow text-center hover:bg-backOffice-main focus:outline-none"
            onClick={handleLogout}
          >
            Logout
          </button>
          {/* This closes the modal if we click anywhere else. */}
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
};
