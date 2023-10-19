import Apps from "./Apps";
import CreateApp from "./appsAdminView/CreateApp";
import TasksProcess from "./appsHomepageView/TasksProcess";
import TitleApps from "./appsHomepageView/TitleApps";

export const ProjectsComponent = () => {

  return (
    <>
      {/*Projects section*/}
      <section className="flex flex-col bg-white rounded-md mx-6 lg:px-10 pb-5">

        {/* HomePage exclusive components */}
        {window.location.pathname !== "/backoffice" && (<> <TitleApps /> <TasksProcess /> </>)}
        
        {/*Cards*/}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full">
          {window.location.pathname == "/backoffice" && (
            <>
              <h2 className="md:col-span-2 lg:col-span-3 ml-10 font-black py-12 text-3xl font-poppins sm:text-center lg:text-left"> Apps </h2>
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
