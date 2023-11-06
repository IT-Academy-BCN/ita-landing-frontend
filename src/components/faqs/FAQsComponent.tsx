import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import FaqsModified from "./faqsAdminView/FaqsModified";
import { apiCall, putApiFaqs } from "../../store/reducers/faqsCall/faqsReducer";
import deleteFaqIcon from "../../assets/img/icon-delete-faq-backoffice.png";
import DeleteFaqModal from "./Modals/DeleteFaqModal";
import { AdminButtons } from "./faqsAdminView/AdminButtons";
import { useTranslation } from "react-i18next";

const FAQs = () => {
  //Interfaces//
  interface Faq {
    title: string;
    description: string;
    id: number;
  }

  interface createToken {
    acces_token: string;
  }

  interface createFaqs {
    faqs: any;
  }
  //Dispatch//
  const dispatch = useDispatch();

  //Getters para los datos desde redux//

  const { acces_token }: createToken = useSelector(
    (state: RootState) => state.apiPostRegister
  );

  const { faqs }: createFaqs = useSelector(
    (state: RootState) => state.faqsReducer
  );

  //llamada api//

  useEffect(() => {
    apiCall(dispatch);
  }, []);

  useEffect(() => {
    setFaqClone(faqs);
  }, [faqs]);

  const [t] = useTranslation();
  const [faqsClone, setFaqClone] = useState(faqs); // Clone Faqs
  const [selectedFaqId, setSelectedFaqId] = useState<number | null>(null); // FaqId selected
  const [deleteModal, setDeleteModal] = useState(false); // DeleteModal
  const [titleButtons, setTitleButtons] = useState(true); // Editar & Eliminar buttons
  const [descriptionButtons, setDescriptionButtons] = useState(false); // Cancelar & Guardar buttons
  const [isContentEditing, setIsContentIsEditing] = useState(false); // Title & Description editable
  const [inputNewTitleValue, setInputNewTitleValue] = useState(""); // New Title input
  const [inputNewDescriptionValue, setInputNewDescriptionValue] = useState(""); // New Description input
  const [positionIndex, setPositionIndex] = useState("");

  const displayInput = (index: number, faq: any) => {
    setTitleButtons(false);

    const checkbox = document.getElementById(
      index.toString()
    ) as HTMLInputElement;
    if (checkbox && !checkbox.checked) {
      checkbox.checked = true;
    }

    setPositionIndex(index.toString());
    setDescriptionButtons(true);

    setInputNewTitleValue(faq.title);
    setInputNewDescriptionValue(faq.description);

    setIsContentIsEditing(true);
  };

  const cancelEditing = (index: number, faq: any) => {
    setTitleButtons(true);
    setDescriptionButtons(false);

    setIsContentIsEditing(false);

    setInputNewTitleValue(faq.title);
    setInputNewDescriptionValue(faq.description);

    const checkbox = document.getElementById(
      index.toString()
    ) as HTMLInputElement;
    if (checkbox && checkbox.checked) {
      checkbox.checked = false;
    }
  };

  const saveEditingFaq = (index: number) => {
    const updatedFaqs = [...faqsClone];
    const updatedFaq = { ...updatedFaqs[index] };

    updatedFaq.title = inputNewTitleValue;
    updatedFaq.description = inputNewDescriptionValue;

    updatedFaqs[index] = updatedFaq;

    setFaqClone(updatedFaqs);

    setTitleButtons(true);
    setDescriptionButtons(false);
    setIsContentIsEditing(false);

    putApiFaqs(faqsClone[index].id, updatedFaq, acces_token, dispatch);
  };

  return (
    <section className="lg:px-10 h-full flex flex-col">

      {window.location.pathname === "/backoffice" && (
        <div className="w-full hidden lg:block">
          <AdminButtons />
        </div>
      )}

      <div className="w-full bg-white rounded-md h-full mb-10">
        {window.location.pathname === "/" && (
          <h2 className="font-bold text-4xl text-center mb-6">
            {t("landingPage.faqsComponent.title")}
          </h2>
        )}

        {window.location.pathname === "/backoffice" && (
          <>
            <h2 className="font-black py-12 ml-10 text-3xl font-poppins sm:text-center lg:text-left">
              FAQs
            </h2>
            <FaqsModified />
          </>
        )}

        {faqsClone.map((faq: Faq, index: number) => (
          <div className="mx-5" key={faq.id}>
            <div className={`collapse rounded-md mb-5 shadow-xl`}>
              <input type="checkbox" className="peer" id={index.toString()} />
              <div className="collapse-title relative lg:flex rounded-b-md bg-white text-justify text-black text-4 font-poppins font-bold font-poppins peer-checked:bg-[#BA007C] peer-checked:rounded-b-[0px] peer-checked:text-secondary-content">
                {window.location.pathname == "/backoffice" &&
                isContentEditing &&
                index.toString() === positionIndex ? (
                  <input
                    type="text"
                    className="z-10 text-black input input-bordered w-full max-w-xs"
                    placeholder={faqsClone[index].title}
                    value={inputNewTitleValue}
                    onChange={(e) => setInputNewTitleValue(e.target.value)}
                  />
                ) : (
                  <p className="lg:text-justify sm:text-center max-w-[75%]">
                    {faqsClone[index].title}
                  </p>
                )}

                {window.location.pathname == "/backoffice" && titleButtons && (
                  <div className="flex relative z-10 ml-auto justify-end mt-2 lg:mt-0">
                    <button
                      className="mx-4 px-4 border-gray-500 h-[30px] self-center"
                      onClick={() => displayInput(index, faqsClone[index])}
                    >
                      {t("backofficePage.faqsComponent.editButton.editButtonTitle")}
                    </button>
                    <img
                      src={deleteFaqIcon}
                      className="h-[30px] cursor-pointer self-center"
                      onClick={() => {
                        setDeleteModal(true);
                        setSelectedFaqId(faq.id);
                      }}
                      alt="locker"
                    />
                  </div>
                )}
              </div>

              <div className="collapse-content rounded-b-md bg-white">
                <p className="text-justify text-black leading-relaxed text-4 font-poppins pl-2 py-4 mx-8 my-6">
                  {window.location.pathname == "/backoffice" &&
                  isContentEditing &&
                  index.toString() === positionIndex ? (
                    <textarea
                      className="z-10 text-black textarea textarea-bordered w-full"
                      placeholder={faqsClone[index].description}
                      value={inputNewDescriptionValue}
                      onChange={(e) =>
                        setInputNewDescriptionValue(e.target.value)
                      }
                    />
                  ) : (
                    faqsClone[index].description
                  )}
                </p>

                {window.location.pathname == "/backoffice" && (
                  <div className="flex justify-end mx-8">
                    {descriptionButtons && index.toString() === positionIndex && (
                      <div>
                        <button
                          className="mr-5 xl:px-7 btn btn-outline-primary border-gray-600 bg-transparent text-gray-600"
                          onClick={() => cancelEditing(index, faqsClone[index])}
                        >
                          {t("backofficePage.faqsComponent.editButton.closeButton")}
                        </button>
                        <button
                          className="btn xl:px-9 bg-pink-it text-white"
                          onClick={() => saveEditingFaq(index)}
                        >
                          {t("backofficePage.faqsComponent.editButton.saveButton")}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>
        ))}

        {window.location.pathname === "/backoffice" &&
          deleteModal &&
          selectedFaqId !== null && (
            <DeleteFaqModal
              deleteModal={setDeleteModal}
              faqId={selectedFaqId}
              acces_token={acces_token}
              dispatch={dispatch}
            />
          )}
      </div>
    </section>
  );
};
export default FAQs;
