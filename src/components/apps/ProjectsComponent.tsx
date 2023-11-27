import Apps from "./Apps";
import CreateApp from "./appsAdminView/CreateApp";
import TasksProcess from "./appsHomepageView/TasksProcess";
import TitleApps from "./appsHomepageView/TitleApps";
import { AdminButtons } from "../faqs/faqsAdminView/AdminButtons";
import { useLocation } from 'react-router-dom';

export const ProjectsComponent = () => {

  const location_path = useLocation();
  const backofficePage_background = location_path.pathname === '/backoffice';


  return (
    <>
      {/*Projects section*/}
      <section className={`flex flex-col lg:pr-10 h-full ${backofficePage_background ? 'bg-backOffice-main' : 'bg-white'}`}>

        {/* HomePage exclusive components */}
        {window.location.pathname !== "/backoffice" && (<> <TitleApps /> <TasksProcess /> </>)}
        
        {/*Cards*/}
          {window.location.pathname == "/backoffice" && (
            <div className="hidden w-full lg:col-span-3 lg:block">
              <AdminButtons />
            </div>
          )}
          <div className="grid w-full px-8 mb-10 bg-white rounded-md lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {window.location.pathname == "/backoffice" && (
              <>

                <h2 className="py-12 ml-10 text-3xl font-black md:col-span-2 lg:col-span-3 font-poppins sm:text-center lg:text-left"> Apps </h2>
                <CreateApp />
              </>
            )}
            <Apps />
          </div>
      </section>
    </>
  );
};

export default ProjectsComponent;
