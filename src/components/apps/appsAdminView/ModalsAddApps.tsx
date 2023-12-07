import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import Cross from "../../../assets/img/cross.png";
import { createToken } from "../../../interfaces/interfaces";
import { postApiApps } from "../../../store/reducers/appsCall/appsCallApiFunctionality";
import { RootState } from "../../../store/store";
import { FormDataSchema } from "./formSchema";

export default function ModalsAddApps() {
  const [t] = useTranslation();
  type formSchema = z.infer<typeof FormDataSchema>;
  const dispatch = useDispatch();

  const { acces_token }: createToken = useSelector(
    (state: RootState) => state.apiPostRegister
  );

  // const [formData, setFormData] = useState<formSchema>();
  const [active, setActive] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<formSchema>({ resolver: zodResolver(FormDataSchema) });

  console.log(watch("state"));

  const sendForm: SubmitHandler<formSchema> = (data) => {
    postApiApps(data, acces_token, dispatch);
    reset();
  };

  // add state that shows or hide modal bc i cant close it.

  return (
    <dialog id="my_modal_2" className="modal">
      <form
        method="dialog"
        className="flex flex-col px-8 pt-5 pb-6 bg-white modal-box text-start min-h-5/6 "
        onSubmit={handleSubmit(sendForm)}
      >
        <button
          type="button"
          className="ml-auto bg-transparent border-0 cursor-pointer focus:outline-none hover:bg-transparent"
        >
          <img src={Cross} alt="Cross button" />
        </button>

        <input
          placeholder={t(
            "backofficePage.appsComponent.createButton.titleInput"
          )}
          className="mb-2 font-bold text-black focus:outline-none font-poppins"
          type="text"
          {...register("title")}
        />
        {errors.title?.message && (
          <span className="text-red-500">{errors.title.message}</span>
        )}

        <textarea
          rows={5}
          placeholder={t(
            "backofficePage.appsComponent.createButton.textDescription"
          )}
          className="overflow-y-auto pr-4 focus:outline-none mt-2 mb-2 w-full text-[#7e7e7e]"
          {...register("description")}
        />
        {/* {errors.description && (
        <span className="text-red-500">{errors.description}</span>
        )} */}

        <div className="my-2">
          <h3 className="font-bold text-base text-[#4F4F4F] mb-1.5">
            {t("backofficePage.appsComponent.createButton.urlProjectTitle")}
          </h3>
          <input
            placeholder={t(
              "backofficePage.appsComponent.createButton.inputText"
            )}
            type="text"
            className="w-full py-1 input input-bordered focus:outline-none"
            {...register("url")}
          />
          {/* {errors.url && <span className="text-red-500">{errors.url}</span>} */}
        </div>

        <div className="my-2">
          <h3 className="font-bold text-base text-[#4F4F4F] mb-1.5">
            {t("backofficePage.appsComponent.createButton.urlGitHubTitle")}
          </h3>
          <input
            placeholder={t(
              "backofficePage.appsComponent.createButton.inputText"
            )}
            {...register("github")}
            type="text"
            className="w-full py-1 input input-bordered focus:outline-none"
          />
          {/* {errors.github && (
            <span className="text-red-500">{errors.github}</span>
          )} */}
        </div>

        <h3 className="font-bold text-base text-[#4F4F4F] mt-2 mb-1.5">
          {t("backofficePage.appsComponent.createButton.state")}
        </h3>
        <div className="flex w-fit rounded-full p-1 mb-4 border border-[#BDBDBD]">
          <button
            onClick={() => {
              setValue("state", "COMPLETED");
              setActive("COMPLETED");
            }}
            className={`
                ${
                  active === "COMPLETED"
                    ? "font-bold bg-completed rounded-full p-3 cursor-pointer"
                    : "cursor-pointer p-3"
                } text-sm`}
          >
            {t("backofficePage.appsComponent.createButton.status.finished")}
          </button>
          <button
            onClick={() => {
              setValue("state", "IN PROGRESS");
              setActive("IN PROGRESS");
            }}
            className={`
                ${
                  active === "IN PROGRESS"
                    ? "font-bold bg-building ml-2 rounded-full p-3 cursor-pointer"
                    : "cursor-pointer p-3 ml-2"
                } text-sm`}
          >
            {t("backofficePage.appsComponent.createButton.status.construction")}
          </button>
          <button
            onClick={() => {
              setValue("state", "SOON");
              setActive("SOON");
            }}
            className={`
                ${
                  active === "SOON"
                    ? "font-bold bg-soon ml-2 rounded-full p-3 cursor-pointer"
                    : "cursor-pointer p-3 ml-2"
                } text-sm`}
          >
            {t("backofficePage.appsComponent.createButton.status.soon")}
          </button>
        </div>
        {/* {errors.state && <span className="text-red-500">{errors.state}</span>} */}

        <div className="flex gap-5 mt-4 mb-0 place-content-center">
          <button className="btn text-sm font-bold rounded-xl xl:px-5 text-[#7e7e7e] border border-[#808080] bg-white">
            {t("backofficePage.appsComponent.createButton.closeButton")}
          </button>
          <button
            type="submit"
            className="text-sm text-white normal-case btn rounded-xl xl:px-10 bg-pink-it hover:bg-pink-hover"
          >
            {t("backofficePage.appsComponent.createButton.saveButton")}
          </button>
        </div>
      </form>
    </dialog>
  );
}
