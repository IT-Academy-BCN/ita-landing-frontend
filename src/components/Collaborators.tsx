import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { getCollaboratorsData } from "../store/reducers/CollaboratorsCall/getCollaboratorsData";
import { collaborator } from "../interfaces/interfaces";

function Collaborators() {
  const { loading } = useSelector(
    (state: RootState) => state.getCollaboratorsFunctionality
  );
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const [active, setActive] = useState("challenges");
  const selector = useSelector(
    (state: RootState) => state.getCollaboratorsFunctionality
  );

  const collaborators: collaborator[] = selector.collaborators;
  const btnActive =
    " px-6 lg:mb-0 mb-5 ml-2 btn btn-ghost text-sm normal-case rounded-3xl bg-pink-it text-white  ";
  const btnInactive =
    "px-6 lg:mb-0 mb-5 ml-2 btn btn-ghost text-sm normal-case rounded-3xl active:bg-pink-it active:text-white border-solid lg:border-transparent border-2 border-indigo-900 min-w-10  ";

  const handleButtonClick = (buttonName: string) => {
    if (loading) {
      return;
    }
    setActive(buttonName);
    dispatch(getCollaboratorsData(buttonName) as any);
  };

  useEffect(() => {
    dispatch(getCollaboratorsData(active) as any);
  }, []);

  return (
    <section className="mt-14 mb-10">
      <div className="flex justify-center">
        <p className="font-bold text-4xl my-5">
          {t("landingPage.collaboratorsComponent.title")}
        </p>
      </div>
      <div className="flex  justify-center  my-5  w-11/12 m-auto  ">
        <div className="flex justify-center">
          <div className="flex flex-wrap navbar lg:bg-base-100  drop-shadow-md lg:justify-between justify-start rounded-full md:shadow-md">
            <button
              className={
                loading && active === "AngularCard"
                  ? `${btnActive} loading loading-spinner`
                  : active === "challenges"
                  ? `${btnActive}`
                  : btnInactive
              }
              onClick={() => handleButtonClick("challenges")}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleButtonClick("challenges");
                }
              }}
            >
              ITA Challenges
            </button>

            <button
              className={
                loading && active === "ReactCard"
                  ? `${btnActive} loading loading-spinner`
                  : active === "wiki"
                  ? `${btnActive}`
                  : btnInactive
              }
              onClick={() => {
                handleButtonClick("wiki");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleButtonClick("wiki");
                }
              }}
            >
              ITA Wiki
            </button>
            <button
              className={
                loading && active === "landing"
                  ? `${btnActive} loading loading-spinner`
                  : active === "landing"
                  ? `${btnActive}`
                  : btnInactive
              }
              onClick={() => {
                handleButtonClick("landing");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleButtonClick("landing");
                }
              }}
            >
              ITA Landing
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-y-5 md:w-11/12 m-auto sm:grid-cols-2 md:grid-cols-3">
        {collaborators.map((collaboratorItem) => (
          <div className="w-2/3 m-auto" key={collaboratorItem.name}>
            <a
              className="flex items-center justify-center "
              href={collaboratorItem.url}
              target="_blank"
            >
              <img
                className="w-32 md:w-20 rounded-full"
                src={collaboratorItem.photo}
                alt={collaboratorItem.name + " photo"}
              />
              <p className="ms-5  w-full text-start">{collaboratorItem.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collaborators;
