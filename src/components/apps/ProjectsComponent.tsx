import Apps from "./Apps";
import CreateApp from "./appsAdminView/CreateApp";
import TasksProcess from "./appsHomepageView/TasksProcess";
import TitleApps from "./appsHomepageView/TitleApps";

export const ProjectsComponent = () => {

  return (
    <>
      {/*Projects section*/}
      <section className="flex flex-col mx-auto container justify-cente bg-green-400">

        {/* HomePage exclusive components */}
        {window.location.pathname !== "/backoffice" && (<> <TitleApps /> <TasksProcess /> </>)}
        {/*Cards*/}

        <div className="grid grid-cols-3 w-full">
          {window.location.pathname == "/backoffice" && ( <CreateApp />)}
          <Apps />
        </div>
      </section>
    </>
  );
};

export default ProjectsComponent;
