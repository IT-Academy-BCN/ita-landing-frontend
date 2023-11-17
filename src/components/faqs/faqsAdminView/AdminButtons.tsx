import { useState } from "react";
import plusIcon from "../../../assets/img/plus.svg";
import userIcon from "../../../assets/img/user.svg";
import { useDispatch } from "react-redux";
import { setIsLogged } from "../../../store/reducers/apiCall/apiPostRegisterLogin";

export const AdminButtons = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickUserButton = () => {
    modalOpen === false ? setModalOpen(true) : setModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(setIsLogged(false));
  };

  return (
    <>
      <div className="flex w-full justify-end items-center lg:bg-backOffice-main py-2 relative">
        <a className="flex items-center justify-center mr-1 w-12 h-10 rounded-lg bg-white">
          <img src={plusIcon} alt="plusIcon" className="w-5" />
        </a>
        <button className="flex items-center justify-center ml-1 w-12 h-10 rounded-lg bg-white" onClick={handleClickUserButton}>
          <img src={userIcon} alt="userIcon" className="w-8" />
        </button>

        {modalOpen && (
          <button className="absolute z-50 rounded-lg font-bold bg-white border-2 border-gray-400 top-12 py-2 px-8 my-4 mx-6 mr-2 hover-bg-transparent" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </>
  );
}
