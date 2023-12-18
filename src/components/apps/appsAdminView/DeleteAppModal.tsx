import locker from "../../../assets/img/locker.png";
import { useTranslation } from "react-i18next";
import { DeleteAppModalProps } from "../../../interfaces/interfaces";
import { deleteAppById } from "../../../store/reducers/appsCall/appsCallApiFunctionality";

function DeleteAppModal({
  deleteModal,
  appId,
  acces_token,
  dispatch,
}: DeleteAppModalProps) {
  const [t] = useTranslation();

  const handleDeleteButtonClick = () => {
    deleteAppById(appId, acces_token, dispatch);
    deleteModal(false);
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box flex flex-col items-center justify-center">
        <button
          className="justify-self-end self-end"
          onClick={() => deleteModal(false)}
        >
          X
        </button>

        <img src={locker} className="h-[118px]" alt="locker" />

        <h1 className="text-2xl font-semibold text-black">
          {t("backofficePage.faqsComponent.deleteButton.deleteButtonTitle")}
        </h1>
        <p className="max-w-[70%] text-center my-4 text-black">
          {t("backofficePage.faqsComponent.deleteButton.text")}
        </p>

        <button
          className="bg-pink-it min-w-[60%] py-2 mb-4 text-white"
          onClick={handleDeleteButtonClick}
        >
          {" "}
          {t("backofficePage.faqsComponent.deleteButton.saveButton")}{" "}
        </button>

        <button
          className="min-w-[60%] py-2 mb-4 border-gray-500 text-black"
          onClick={() => deleteModal(false)}
        >
          {" "}
          {t("backofficePage.faqsComponent.deleteButton.closeButton")}{" "}
        </button>
      </div>
    </div>
  );
}

export default DeleteAppModal;
