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
    <section className="flex flex-col h-full lg:pr-10 mt-24">
      {window.location.pathname === "/backoffice" && (
        <div className="hidden w-full lg:block">
          <AdminButtons />
        </div>
      )}

      <div className="w-full h-full px-8 mb-10 bg-white rounded-md">
        {window.location.pathname === "/" && (
          <h2 className="font-bold mb-6 text-4xl text-center">
            {t("landingPage.faqsComponent.title")}
          </h2>
        )}
        {/*Título grande  */}
        {window.location.pathname === "/backoffice" && (
          <>
            <h2 className="py-12 ml-10 text-3xl font-black font-poppins sm:text-center lg:text-left">
              FAQs
            </h2>
            <FaqsModified />
          </>
        )}
        {/*Titulo de la pregunta  */}
        {faqsClone.map((faq: Faq, index: number) => (
          <div className="mx-5" key={faq.id}>
            <div
              className={`collapse rounded-lg mb-5 shadow-[0_2px_6px_rgba(70,70,70,0.2)] border-[1px] `}
            >
              <input type="checkbox" className="peer" id={index.toString()} />
              <div className="collapse-title relative lg:flex items-center rounded-b-md bg-white text-justify text-[#092C4C] text-4 font-poppins font-bold peer-checked:bg-[#BA007C] peer-checked:rounded-b-[0px] peer-checked:text-[#fff] h-[62px]">
                {window.location.pathname == "/backoffice" &&
                isContentEditing &&
                index.toString() === positionIndex ? (
                  <div className="flex items-center w-full">
                    <input
                      type="text"
                      className="z-10 content-center flex-grow pl-2 text-white input input-ghost"
                      placeholder={faqsClone[index].title}
                      value={inputNewTitleValue}
                      onChange={(e) => setInputNewTitleValue(e.target.value)}
                    />
                  </div>
                ) : (
                  <p className="lg:text-justify sm:text-center max-w-[75%] ">
                    {faqsClone[index].title}
                  </p>
                )}

                {/*Buttons editar/eliminar sin desplegar   */}

                {window.location.pathname == "/backoffice" && titleButtons && (
                  <div className="relative z-10 flex justify-end mt-8 ml-auto lg:mt-0">
                    <button
                      className="mx-4 px-4 text-[#808080] font-semibold border bg-white border-[#D9D9D9] rounded-lg h-[30px] self-center"
                      onClick={() => displayInput(index, faqsClone[index])}
                    >
                      {t(
                        "backofficePage.faqsComponent.editButton.editButtonTitle"
                      )}
                    </button>

                    <button
                      onClick={() => {
                        setDeleteModal(true);
                        setSelectedFaqId(faq.id);
                      }}
                    >
                      <img
                        src={deleteFaqIcon}
                        className="h-[30px] cursor-pointer self-center"
                        alt="locker"
                      />
                    </button>
                  </div>
                )}
              </div>

              {/*Edit: area texto  */}

              <div className="collapse-content rounded-b-md">
                <p className="py-4 mx-0 my-6 leading-relaxed text-justify text-[#092C4C] text-4 font-poppins">
                  {window.location.pathname == "/backoffice" &&
                  isContentEditing &&
                  index.toString() === positionIndex ? (
                    <textarea
                      className="z-10 w-full px-2 text-black textarea textarea-bordered"
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

                {/*Buttons editar/eliminar desplegado */}

                {window.location.pathname == "/backoffice" && (
                  <div className="flex items-center justify-end">
                    {descriptionButtons &&
                      index.toString() === positionIndex && (
                        <div>
                          <button
                            className="py-4 px-10 mr-4 mb-2 text-sm text-[#7e7e7e] border border-[#7e7e7e] rounded-lg"
                            onClick={() =>
                              cancelEditing(index, faqsClone[index])
                            }
                          >
                            {t(
                              "backofficePage.faqsComponent.editButton.closeButton"
                            )}
                          </button>

                          <button
                            className="py-4 px-12 mr-4 mb-2 text-sm text-white border border-[#BA007C] bg-[#BA007C] rounded-lg"
                            onClick={() => saveEditingFaq(index)}
                          >
                            {t(
                              "backofficePage.faqsComponent.editButton.saveButton"
                            )}
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
