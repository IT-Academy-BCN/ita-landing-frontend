import itImage from "../assets/img/ITA_Logo.png";
import LogoOut from "../assets/img/Sign-out.png";
import { useEffect, useState } from "react";
import FAQs from "./faqs/FAQsComponent";
import ProjectsComponent from "./apps/ProjectsComponent";
import menu from "../assets/img/menu.png";
import { AdminButtons } from "./faqs/faqsAdminView/AdminButtons";

function ViewBackOffice({
  setIsLogged,
  dispatch,
}: {
  setIsLogged: any;
  dispatch: any;
}) {
  const [state, setState] = useState({
    faqs: true,
    projectsComponent: true,
  });
  useEffect(() => {
    setState({ ...state, faqs: false });
  }, []);

  const [boldFont, setBoldFont] = useState({
    boldFaqs: false,
    boldProjectsComponent: false,
  });
  useEffect(() => {
    setBoldFont({ ...boldFont, boldFaqs: true });
  }, []);

  function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerHeight, window.innerWidth]);
      };
      window.addEventListener('resize', handleResize);
    }, []);
  return size;
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth] = useWindowSize();

  const toggleDropdown = ():void=> {
      setIsDropdownOpen(!isDropdownOpen);
    };

  useEffect(() => {
    if(windowWidth>=1024){
      setIsDropdownOpen(false)
    }
  }, [windowWidth]);


return (
  <>
      <main className="grid grid-cols-6 w-screen min-h-screen bg-backOffice-main">

          <nav className="hidden lg:block">
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



          <div className="lg:col-span-5 col-span-6 m-5">

              {/* Mobile */}
              <div className='lg:hidden'>
                  <div className="flex justify-end mt-4 mr-4 cursor-pointer">
                      <img src={menu} className="h-8 w-8" onClick={toggleDropdown}/>
                  </div>
              </div>
              {isDropdownOpen && (
                  <div className='flex flex-col'>
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
              )}
              {!isDropdownOpen && (
                  <>
                      <div className={`${state.faqs ? 'component hidden' : 'component'}`}>
                          <AdminButtons />
                          <FAQs />    
                      </div>

                      <div className={state.projectsComponent ? 'component hidden' : 'component'}>
                          <AdminButtons />
                          <ProjectsComponent />
                      </div>
                  </>
              )}
          </div>
      </main>
  </>
)
}

export default ViewBackOffice;