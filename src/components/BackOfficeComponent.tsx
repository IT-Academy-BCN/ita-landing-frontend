import itImage from "../assets/img/ITA_Logo.png";
import { useEffect, useState } from "react";
import FAQs from "./faqs/FAQsComponent";
import ProjectsComponent from "./apps/ProjectsComponent";
import menu from "../assets/img/menu.png";
import { AdminButtons } from "./faqs/faqsAdminView/AdminButtons";
import BackOfficeUserSendCode from "./BackOfficeUserSendCode";
import { useTranslation } from "react-i18next";

function ViewBackOffice({ setIsLogged, dispatch }: { readonly setIsLogged: any; readonly dispatch: any }) {
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
    <>
      <main className="grid grid-cols-6 w-screen min-h-screen lg:bg-backOffice-main h-full">

        <nav className="hidden lg:block">
          <img src={itImage} alt="img-logo" className="mt-5 mx-auto" />
          <div className="grid grid-rows-3 my-10">
            <button className={`flex justify-center items-center py-2 my-4 ml-2 ${boldFont.boldFaqs ? 'font-bold' : 'font-normal'}`} onClick={() => handleClickNav('faqs')}>
              <div className={`w-2 h-2 rounded-full mr-2 bg-[#BA007C] ${boldFont.boldFaqs ? '' : 'hidden'}`}></div>
              {t("backofficePage.navbarComponent.faqs")}
            </button>

            <button className={`flex justify-center items-center py-2 my-4 ml-2 ${boldFont.boldProjectsComponent ? 'font-bold' : 'font-normal'}`} onClick={() => handleClickNav('apps')}>
              <div className={`w-2 h-2 rounded-full mr-2 bg-[#BA007C] ${boldFont.boldProjectsComponent ? '' : 'hidden'}`}></div>
              {t("backofficePage.navbarComponent.apps")}
            </button>

            <button className={`flex justify-center items-center py-2 my-4 ml-2 ${boldFont.boldUsersComponent ? 'font-bold' : 'font-normal'}`} onClick={() => handleClickNav('users')}>
              <div className={`w-2 h-2 rounded-full mr-2 bg-[#BA007C] ${boldFont.boldUsersComponent ? '' : 'hidden'}`}></div>
              {t("backofficePage.navbarComponent.users")}
            </button>
          </div>
        </nav>

        <div className="lg:col-span-5 col-span-6 m-5">

          {/* Mobile */}
          <div className='lg:hidden'>
            <div className="flex justify-end my-4 mr-4 cursor-pointer">
              <AdminButtons />
              <img src={menu} className="h-8 w-8" onClick={toggleDropdown} />
            </div>
          </div>
          {isDropdownOpen && (
            <div className='flex flex-col'>
              <button className={`flex justify-center items-center py-2 my-4 ml-2 ${boldFont.boldFaqs ? 'font-bold' : 'font-normal'}`} onClick={() => handleClickNav('faqs')}>
                <div className={`w-2 h-2 rounded-full mr-2 bg-[#BA007C] ${boldFont.boldFaqs ? '' : 'hidden'}`}></div>
                FAQs
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
              <div className={`${state.faqs ? 'component h-full' : 'component hidden'}`}>
                {/* <div className="hidden lg:block">
                  <AdminButtons />
                </div> */}
                <FAQs />
              </div>

              <div className={`${state.projectsComponent ? 'component h-full' : 'component hidden'}`}>
                {/* <div className="hidden lg:block">
                  <AdminButtons />
                </div> */}
                <ProjectsComponent />
              </div>

              <div className={`${state.usersComponent ? 'component h-full' : 'component hidden'}`}>
                <BackOfficeUserSendCode />
              </div>
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default ViewBackOffice;