import Apps from "./Apps";
import CreateApp from "./appsAdminView/CreateApp";
import TasksProcess from "./appsHomepageView/TasksProcess";
import TitleApps from "./appsHomepageView/TitleApps";

export const ProjectsComponent = () => {

  return (
    <>
      {/*Projects section*/}
      <section className="flex flex-col bg-white rounded-md mx-6 px-10">

        {/* HomePage exclusive components */}
        {window.location.pathname !== "/backoffice" && (<> <TitleApps /> <TasksProcess /> </>)}
        
        {/*Cards*/}
        <div className="grid grid-cols-3 w-full">
          {window.location.pathname == "/backoffice" && (
            <>
              <h2 className="col-span-3 ml-10 font-black py-12 text-3xl font-poppins sm:text-center lg:text-left"> Apps </h2>
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
