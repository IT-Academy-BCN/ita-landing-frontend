import { useState } from "react";
import Card from "./CollaboratorsCard";
import CollaboratorsModal from "./CollaboratorsModal";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setLastClickedButton } from "../store/reducers/CollaboratorsCall/getCollaboratorsFunctionality";

function Collaborators() {
  const dispatch = useDispatch();
 const {loading, lastClickedButton} = useSelector((state:RootState)=> state.getCollaboratorsFunctionality);

  const [t] = useTranslation();
  const [active, setActive] = useState("AngularCard");

  const VT = t("landingPage.collaboratorsComponent.buttonViewAll");
  const btnActive =
    " px-6 lg:mb-0 mb-5 ml-2 btn btn-ghost text-sm normal-case rounded-3xl bg-pink-it text-white  ";
  const btnInactive =
    "px-6 lg:mb-0 mb-5 ml-2 btn btn-ghost text-sm normal-case rounded-3xl active:bg-pink-it active:text-white border-solid lg:border-transparent border-2 border-indigo-900 min-w-10  ";

    const handleButtonClick = (buttonName: string) => {
      if (loading || buttonName === lastClickedButton) {
        return;
      }
  
      setActive(buttonName);
      dispatch(setLastClickedButton(buttonName));
    };

 
  
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
            <a className={
                loading && active === "AngularCard"
                ? `${btnActive} loading loading-spinner`
                : active === "AngularCard"
                ? `${btnActive}`
                : btnInactive
              }
              onClick={
                () => handleButtonClick("AngularCard")
              }
              onKeyDown={
                (e) => {
                  if (e.key === "Enter") {
                    handleButtonClick("AngularCard");
                  }
                }
              }
            >
              {loading && active === "AngularCard" ? "" : "Wiki"}
            </a>
            
            <a className={
              loading && active === "ReactCard"
              ? `${btnActive} loading loading-spinner`
              : active === "ReactCard"
              ? `${btnActive}`
              : btnInactive
            }
              onClick={() => {
                handleButtonClick("ReactCard");
              }}
              onKeyDown={
                (e) => {
                  if (e.key === "Enter") {
                    handleButtonClick("ReactCard");
                  }
                }
              }
            >
              {loading && active === "ReactCard" ? "" : "Challenges"}
            </a>
            <a
              className={
                loading && active === "PHPCard"
                ? `${btnActive} loading loading-spinner`
                : active === "PHPCard"
                ? `${btnActive}`
                : btnInactive
              }
              onClick={() => {
                handleButtonClick("PHPCard");
              }}
              onKeyDown={
                (e) => {
                  if (e.key === "Enter") {
                    handleButtonClick("PHPCard");
                  }
                }
              }
            >
             {loading && active === "PHPCard" ? "" : "Landing"}
            </a>
            <a
              className={
                loading && active === "NodeCard"
                ? `${btnActive}  loading loading-spinner`
                : active === "NodeCard"
                ? `${btnActive}`
                : btnInactive
              }
              onClick={() => {
                handleButtonClick("NodeCard");
              }}
              onKeyDown={
                (e) => {
                  if (e.key === "Enter") {
                    handleButtonClick("NodeCard");
                  }
                }
              }
            >
              {loading && active === "NodeCard" ? "" : "Profiles"}
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-end my-5 mr-10">
        <label
          htmlFor="CollaboratorsModal"
          className="lg:mr-20 mr-0 font-bold  text-pink-it hover:text-pink-hover active:underline  hover:cursor-pointer"
        >
          {VT}
        </label>
        <CollaboratorsModal />
      </div>
      <div>
        {active === "AngularCard" && <Card title="Angular" />}
        {active === "ReactCard" && <Card title="React" />}
        {active === "PHPCard" && <Card title="PHP" />}
        {active === "NodeCard" && <Card title="Node" />}
        {active === "JavaCard" && <Card title="Java" />}
        {active === "DataScienceCard" && <Card title="Data Science" />}
      </div>
    </section>
  );
}

export default Collaborators;
