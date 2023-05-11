import "./App.css";

import TeamSectionComponent from "./components/teamSection/TeamSectionComponent"
import SloganComponent from "./components/SloganComponent"
import HeaderComponent from "./components/HeaderComponent"
import ProjectsComponent from "./components/ProjectsComponent"
      
function App() {
  return (
    <>
      <HeaderComponent />
      <SloganComponent />
      <TeamSectionComponent />
      <ProjectsComponent />
    </>
  );
}

export default App;

