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
      <div className="flex w-full justify-end items-center lg:bg-backOffice-main py-2 relative">
        <a className="flex items-center justify-center mr-1 w-12 h-10 rounded-lg bg-backOffice-main lg:bg-white">
          <img src={plusIcon} alt="plusIcon" className="w-5" />
        </a>

        <button
          className="flex items-center justify-center ml-1 w-12 h-10 rounded-lg bg-backOffice-main lg:bg-white  cursor-pointer"
          onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal_1") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          <img src={userIcon} alt="userIcon" className="w-8" />
        </button>
        {/* The modal in question */}
        <dialog id="my_modal_1" className="modal">
          <button
            className="modal-box absolute top-20 right-20 lg:right-16 w-48 py-3 font-bold shadow text-center hover:bg-backOffice-main focus:outline-none"
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
