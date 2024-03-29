import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { postApiFaqs } from "../../../store/reducers/faqsCall/faqsReducer";
import { createToken } from "../../../interfaces/interfaces";
import { useTranslation } from "react-i18next";

export default function FaqsModified() {
  const { acces_token }: createToken = useSelector(
    (state: RootState) => state.apiPostRegister
  );

  const statusMessage: string = useSelector(
    (state: RootState) => state.faqsReducer.statusMessage
  );

  //constantes para el set //
  const dispatch = useDispatch();

  const [t] = useTranslation();
  const [faqsContent, setFaqsContent] = useState<{
    title: string;
    description: string;
  }>({
    title: "",
    description: "",
  });

  //initial placeholder
  // const [placeholderText, setPlaceholderText] = useState(
  //   t("backofficePage.faqsComponent.createNewQuestion.createNewQuestionTitle")
  // );

  const [isOpen, setIsOpen] = useState(false);
  const [localStatusMessage, setLocalStatusMessage] = useState("");

  const handleClosed = () => {
    setIsOpen(false);
    setFaqsContent({ title: "", description: "" });
    setLocalStatusMessage("");
  };
  const handleCreated = () => {
    postApiFaqs(faqsContent, acces_token, dispatch);
    setFaqsContent({ title: "", description: "" });
  };

  useEffect(() => {
    if (statusMessage) {
      setLocalStatusMessage(statusMessage);
    }
  }, [statusMessage]);

  return (
    <div className="mx-5">
      <div
        className={`collapse collapse-plus border-2 border-dashed border-[#7e7e7e] mb-6 ${
          isOpen ? "collapse-open" : "collapse-close"
        }`}
      >
        <input
          type="checkbox"
          className={`${isOpen ? "z-0" : ""} hover:cursor-pointer`}
          onClick={() => setIsOpen(true)}
        />
        <div
          className={`collapse-title relative text-start font-bold text-[#7e7e7e] ${
            isOpen ? "text-white bg-[#BA007C] z-10" : ""
          }`}
        >
          {isOpen ? (
            <input
              type="text"
              className="z-20 text-black input input-bordered"
              onChange={(e) =>
                setFaqsContent({ ...faqsContent, title: e.target.value })
              }
              value={faqsContent.title}
            />
          ) : (
            <p className="z-10 lg:text-justify sm:text-center max-w-[75%]">
              {t(
                "backofficePage.faqsComponent.createNewQuestion.createNewQuestionTitle"
              )}
            </p>
          )}
        </div>

        <div className="collapse-content">
          <textarea
            className="outline-none resize-none pt-4 w-full"
            placeholder={t(
              "backofficePage.faqsComponent.createNewQuestion.textareaInput"
            )}
            onChange={(e) =>
              setFaqsContent({ ...faqsContent, description: e.target.value })
            }
            value={faqsContent.description}
          ></textarea>
          <div className="flex justify-end items-center">
            <button
              className="py-2 px-8 mr-4 mb-2 text-sm text-[#7e7e7e] border border-[#7e7e7e]"
              onClick={handleClosed}
            >
              {t("backofficePage.faqsComponent.createNewQuestion.closeButton")}
            </button>
            <button
              className="py-2 px-8 mr-4 mb-2 text-sm text-white bg-[#BA007C]"
              onClick={handleCreated}
            >
              {t("backofficePage.faqsComponent.createNewQuestion.saveButton")}
            </button>
          </div>
        </div>
      </div>
      {localStatusMessage === "FAQ created successfully!" ? (
        <div className="text-green-700 mb-5">{localStatusMessage}</div>
      ) : localStatusMessage ===
        "Failed to create new FAQ. Please try again." ? (
        <div className="text-red-400 mb-5">{localStatusMessage}</div>
      ) : null}
    </div>
  );
}
