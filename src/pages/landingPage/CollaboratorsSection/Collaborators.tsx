import { useState } from "react"
import Card from "./CollaboratorsCard";
import CollaboratorsModal from "../Modals/CollaboratorsModal";


function Collaborators() {
    const [active, setActive] = useState("AngularCard");
    const [selectedItem, setSelectedItem] = useState(1);
    const VT = "Ver Todos >";
    const btnActive = "btn btn-ghost text-sm normal-case rounded-3xl bg-[#025E7E] text-white";
    const btnInactive = "btn btn-ghost text-sm normal-case rounded-3xl active:bg-[#025E7E] active:text-white";
 
    return (
        <section className="my-10">
        <div className="flex justify-center">
            <p className="text-4xl font-extrabold my-5">Colaboradores de proyectos</p>
        </div>
        <div className="flex justify-center my-5">
        <div className="flex justify-center w-[726px]">
            <div className="flex navbar bg-base-100 drop-shadow-md justify-between rounded-full">
                
                <a className={ selectedItem === 1 ? btnActive : btnInactive }
                                onClick={() => {setActive("AngularCard"); setSelectedItem(1);}} >Angular</a>
                <a className={ selectedItem === 2 ? btnActive : btnInactive }
                                onClick={() => {setActive("ReactCard"); setSelectedItem(2);}} >React</a>
                <a className={ selectedItem === 3 ? btnActive : btnInactive }
                                onClick={() => {setActive("PHPCard"); setSelectedItem(3);}} >PHP</a>
                <a className={ selectedItem === 4 ? btnActive : btnInactive }
                                onClick={() => {setActive("NodeCard"); setSelectedItem(4);}} >Node</a>
                <a className={ selectedItem === 5 ? btnActive : btnInactive }
                                onClick={() => {setActive("JavaCard"); setSelectedItem(5);}} >Java</a>
                <a className={ selectedItem === 6 ? btnActive : btnInactive }
                                onClick={() => {setActive("DataScienceCard"); setSelectedItem(6);}} >Data Science</a>
            </div>
        </div>
        </div>
        <div className="flex justify-end my-5 mr-10">
            {/* <a className="font-bold text-[#025E7E] active:underline " href="">{VT}</a> */}
            <label htmlFor="CollaboratorsModal" className="font-bold text-[#025E7E] active:underline hover:text-purple-600 hover:cursor-pointer">{VT}</label>
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