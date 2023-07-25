import itImage from '../img/ITA_Logo.png'
import LogoOut from '../img/Sign-out.png'
import { useEffect, useState } from "react";
import FAQs from "./faqs/FAQsComponent";
import ProjectsComponent from "./apps/ProjectsComponent";

function ViewBackOffice({setIsLogged,dispatch}:{setIsLogged:any,dispatch:any}) {

    const [state, setState] = useState({
        faqs: true,
        projectsComponent: true
    });
    useEffect(() => {
        setState({...state, faqs: false});
    }, [ ]);


  
    
    const [boldFont, setBoldFont] = useState({
        boldFaqs: false,
        boldProjectsComponent: false,
    });
    useEffect(() => {
        setBoldFont({...boldFont, boldFaqs: true});
    }, []);

  return (
    
    <>
        <main className="grid grid-cols-6  w-screen min-h-screen  bg-backOffice-main">

            <nav>
                <img src={itImage} alt="img-logo" className="mt-5 mx-auto"/>
                <div className="grid grid-rows-3 my-10">
                    <button className={`flex justify-center items-center py-2 my-4 ml-2 ${boldFont.boldFaqs ? 'font-bold' : 'font-normal'}`} onClick={() => {
                        setState({ faqs: false, projectsComponent: true });
                        setBoldFont({boldFaqs: true,  boldProjectsComponent: false});
                    }}>
                    <div className={`w-2 h-2 rounded-full mr-2 bg-[#BA007C] ${boldFont.boldFaqs ? '' : 'hidden'}`}></div>
                    FAQs
                    </button>

                    <button className={`flex justify-center items-center py-2 my-4 ml-2 ${boldFont.boldProjectsComponent ? 'font-bold' : 'font-normal'}`} onClick={() => {
                        setState({ faqs: true, projectsComponent: false });
                        setBoldFont({ boldFaqs: false, boldProjectsComponent: true });
                    }}>
                    <div className={`w-2 h-2 rounded-full mr-2 bg-[#BA007C] ${boldFont.boldProjectsComponent ? '' : 'hidden'}`}></div>
                    Apps
                    </button>

                    <div>
                        <button className="py-2 my-4 ml-2">Instrucciones</button>
                    </div>
                </div>
                <button onClick={()=> dispatch(setIsLogged(false)) } className="flex py-2 px-3 my-4 ml-2"> <img src={LogoOut} alt="" />
                    Logout
                </button>
            </nav>

            <div className=" col-span-5 m-5 bg-white rounded-md">
                <div className={`mt-20 ${state.faqs ? 'component hidden' : 'component'}`}>
                    <FAQs />
                </div>

                <div className={state.projectsComponent ? 'component hidden' : 'component'}>
                    <ProjectsComponent />
                </div>
            </div>
        </main>
    </>
  )
}

export default ViewBackOffice;