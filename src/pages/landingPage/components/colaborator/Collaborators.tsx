import { useState } from "react"
import Card from "./components/CollaboratorsCard";
import CollaboratorsModal from "./components/CollaboratorsModal";


function Collaborators() {
    const [active, setActive] = useState("AngularCard");
   // Aconsejo quitarlo, debajo está el resultado solo con el useState de arriba const [selectedItem, setSelectedItem] = useState(1);
    const VT = "Ver Todos >";
    const btnActive = " px-6 lg:mb-0 mb-5 ml-2 btn btn-ghost text-sm normal-case rounded-3xl bg-[#025E7E] text-white  ";
    const btnInactive = "px-6 lg:mb-0 mb-5 ml-2 btn btn-ghost text-sm normal-case rounded-3xl active:bg-[#025E7E] active:text-white border-solid lg:border-transparent border-2 border-indigo-900 min-w-10  ";
 
    return (
        <section className="my-10  ">
        <div className="flex justify-center">
            <p className="text-4xl font-extrabold my-5">Colaboradores de proyectos</p>
        </div>
        <div className="flex  justify-center  my-5  w-11/12 m-auto  ">
        <div className="flex justify-center">
            <div className="flex flex-wrap navbar lg:bg-base-100  drop-shadow-md lg:justify-between justify-start rounded-full">
                
                <a className={ active === "AngularCard" ? btnActive : btnInactive }
                                onClick={() => {setActive("AngularCard")}} >Angular</a>
                <a className={ active === "ReactCard" ? btnActive : btnInactive }
                                onClick={() => {setActive("ReactCard")}} >React</a>
                <a className={ active ==="PHPCard" ? btnActive : btnInactive }
                                onClick={() => {setActive("PHPCard")}} >PHP</a>
                <a className={ active ==="NodeCard" ? btnActive : btnInactive }
                                onClick={() => {setActive("NodeCard")  }} >Node</a>
                <a className={ active === "JavaCard" ? btnActive : btnInactive }
                                onClick={() => {setActive("JavaCard")}} >Java</a>
                <a className={ active === "DataScienceCard" ? btnActive : btnInactive }
                                onClick={() => {setActive("DataScienceCard"); }} >Data Science</a>
            </div>
        </div>
        </div>
        <div className="flex justify-end my-5 mr-10">
            {/* <a className="font-bold text-[#025E7E] active:underline " href="">{VT}</a> */}
            <label htmlFor="CollaboratorsModal" className="lg:mr-20 mr-0 font-bold  text-base-content active:underline hover:text-purple-600 hover:cursor-pointer">{VT}</label>
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
    )
}


export default Collaborators;