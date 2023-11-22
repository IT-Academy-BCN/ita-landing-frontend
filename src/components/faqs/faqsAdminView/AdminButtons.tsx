import { useState } from "react";
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
      <div className="relative flex items-center justify-end w-full py-2 lg:bg-backOffice-main">
        <button className="flex items-center justify-center w-12 h-10 ml-1 bg-white rounded-lg" onClick={handleClickUserButton}>
          <img src={userIcon} alt="userIcon" className="w-8" />
        </button>

        {modalOpen && (
          <button className="absolute z-50 px-8 py-2 mx-6 my-4 mr-2 font-bold bg-white border-2 border-gray-400 rounded-lg top-12 hover-bg-transparent" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </>
  );
}
