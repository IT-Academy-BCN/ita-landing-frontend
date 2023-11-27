import itImage from "../assets/img/ITA_Logo.png";
import { useEffect, useState } from "react";
import FAQs from "./faqs/FAQsComponent";
import ProjectsComponent from "./apps/ProjectsComponent";
import menu from "../assets/img/menu.svg";
import { AdminButtons } from "./faqs/faqsAdminView/AdminButtons";
import BackOfficeUserSendCode from "./BackOfficeUserSendCode";
import { useTranslation } from "react-i18next";

function ViewBackOffice(){
  const [t] = useTranslation();
  
  const [state, setState] = useState({
    faqs: false,
    projectsComponent: false,
    usersComponent: false,
  });

  const [boldFont, setBoldFont] = useState({
    boldFaqs: false,
    boldProjectsComponent: false,
    boldUsersComponent: false
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickNav = (navOption: string) => {
    if (navOption === 'faqs') {
      setState({ faqs: true, projectsComponent: false, usersComponent: false })
      setBoldFont({ boldFaqs: true, boldProjectsComponent: false, boldUsersComponent: false })
    }
    else if (navOption === 'apps') {
      setState({ faqs: false, projectsComponent: true, usersComponent: false })
      setBoldFont({ boldFaqs: false, boldProjectsComponent: true, boldUsersComponent: false })
    } else {
      setState({ faqs: false, projectsComponent: false, usersComponent: true });
      setBoldFont({ boldFaqs: false, boldProjectsComponent: false, boldUsersComponent: true });
    }
  }

  useEffect(() => {
    setState({ ...state, faqs: true });
    setBoldFont({ ...boldFont, boldFaqs: true });
  }, []);

  return (
      <main className="grid w-screen h-full min-h-screen grid-cols-6 lg:bg-backOffice-main">

        <nav className="hidden lg:block">
          <img src={itImage} alt="img-logo" className="ml-20 mt-5" />
          <div className="grid grid-rows-3 my-36">
              <button className={`flex justify-start items-center py-2 my-4 ml-20  
              ${boldFont.boldFaqs ? 'font-bold hover:divide-y-8' : 'font-normal'} focus:outline-none`}
              onClick={() => handleClickNav('faqs')}>
                <div className={`w-2.5 h-2.5 rounded-full mr-2 bg-[#BA007C] ${boldFont.boldFaqs ? '' : 'hidden'}`}></div>
                {t("backofficePage.navbarComponent.faqs")}
            </button>

            <button className={`flex justify-start items-center py-2 my-4 ml-20 
              ${boldFont.boldProjectsComponent ? 'font-bold' : 'font-normal'} focus:outline-none`} 
              onClick={() => handleClickNav('apps')}>
                <div className={`w-2.5 h-2.5 rounded-full mr-2 bg-[#BA007C] 
                ${boldFont.boldProjectsComponent ? '' : 'hidden'}`}>
                </div>
                {t("backofficePage.navbarComponent.apps")}
            </button>

            <button className={`flex justify-start items-center py-2 my-4 ml-20  
              ${boldFont.boldUsersComponent ? 'font-bold' : 'font-normal'} focus:outline-none`} 
              onClick={() => handleClickNav('users')}>
                <div className={`w-2.5 h-2.5 rounded-full mr-2 bg-[#BA007C] 
                ${boldFont.boldUsersComponent ? '' : 'hidden'}`}>
                </div>
                {t("backofficePage.navbarComponent.users")}
            </button>
          </div>
        </nav>

        <div className="col-span-6 m-1 lg:col-span-5">

          {/* Mobile */}
            <div className="flex items-center justify-end my-1 mr-2 lg:mr-10">
              <AdminButtons />
              <div className="lg:hidden w-12 h-12 mr-4" onClick={toggleDropdown}>
                <img src={menu} className="h-full cursor-pointer"/>
              </div>
            </div>
          {isDropdownOpen && (
            <div className='flex flex-col'>
              <button className={`flex justify-center items-center py-2 my-4 ml-2 ${boldFont.boldFaqs ? 'font-bold' : 'font-normal'}`} onClick={() => handleClickNav('faqs')}>
                <div className={`w-2 h-2 rounded-full mr-2 bg-[#BA007C] ${boldFont.boldFaqs ? '' : 'hidden'}`}></div>
                FAQ
              </button>

              <button className={`flex justify-center items-center py-2 my-4 ml-2 ${boldFont.boldProjectsComponent ? 'font-bold' : 'font-normal'}`} onClick={() => handleClickNav('apps')}>
                <div className={`w-2 h-2 rounded-full mr-2 bg-[#BA007C] ${boldFont.boldProjectsComponent ? '' : 'hidden'}`}></div>
                Apps
              </button>

              <button className={`flex justify-center items-center py-2 my-4 ml-2 ${boldFont.boldUsersComponent ? 'font-bold' : 'font-normal'}`} onClick={() => handleClickNav('users')}>
                <div className={`w-2 h-2 rounded-full mr-2 bg-[#BA007C] ${boldFont.boldUsersComponent ? '' : 'hidden'}`}></div>
                Usuari@s
              </button>

            </div>
          )}
          {!isDropdownOpen && (
            <>
              <div className={`${state.faqs ? 'component h-auto' : 'component hidden'}`}>
                <FAQs />
              </div>

              <div className={`${state.projectsComponent ? 'component h-auto' : 'component hidden'}`}>
                <ProjectsComponent />
              </div>

              <div className={`${state.usersComponent ? 'component h-auto' : 'component hidden'}`}>
                <BackOfficeUserSendCode />
              </div>
            </>
          )}
        </div>
      </main>
  )
}

export default ViewBackOffice;