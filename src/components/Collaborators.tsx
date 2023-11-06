import { useState } from "react";
import Card from "./CollaboratorsCard";
import CollaboratorsModal from "./CollaboratorsModal";
import { useTranslation } from "react-i18next";

function Collaborators() {
  const [t] = useTranslation();
  const [active, setActive] = useState("AngularCard");
  // Aconsejo quitarlo, debajo está el resultado solo con el useState de arriba const [selectedItem, setSelectedItem] = useState(1);
  const VT = t("landingPage.collaboratorsComponent.buttonViewAll");
  const btnActive =
    " px-6 lg:mb-0 mb-5 ml-2 btn btn-ghost text-sm normal-case rounded-3xl bg-pink-it text-white  ";
  const btnInactive =
    "px-6 lg:mb-0 mb-5 ml-2 btn btn-ghost text-sm normal-case rounded-3xl active:bg-pink-it active:text-white border-solid lg:border-transparent border-2 border-indigo-900 min-w-10  ";

  return (
    <section className="mt-14 mb-10">
      <div className="flex justify-center">
        <p className="font-bold text-4xl my-5">
          {t("landingPage.collaboratorsComponent.title")}
        </p>
      </div>
      <div className="flex  justify-center  my-5  w-11/12 m-auto  ">
        <div className="flex justify-center">
          <div className="flex flex-wrap navbar lg:bg-base-100  drop-shadow-md lg:justify-between justify-start rounded-full shadow-md">
            <a
              className={active === "AngularCard" ? btnActive : btnInactive}
              onClick={() => {
                setActive("AngularCard");
              }}
            >
              Wiki
            </a>
            <a
              className={active === "ReactCard" ? btnActive : btnInactive}
              onClick={() => {
                setActive("ReactCard");
              }}
            >
              Challenges
            </a>
            <a
              className={active === "PHPCard" ? btnActive : btnInactive}
              onClick={() => {
                setActive("PHPCard");
              }}
            >
              Landing
            </a>
            <a
              className={active === "NodeCard" ? btnActive : btnInactive}
              onClick={() => {
                setActive("NodeCard");
              }}
            >
              Profile
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-end my-5 mr-10">
        {/* <a className="font-bold text-[#025E7E] active:underline " href="">{VT}</a> */}
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
