import "./App.css";

import TeamSectionComponent from "./components/teamSection/TeamSectionComponent"
import SloganComponent from "./components/SloganComponent"
import HeaderComponent from "./components/HeaderComponent"
import Footer from "./components/FooterComponent"
import ProjectsComponent from "./components/ProjectsComponent"
import Collaborators from "./components/CollaboratorsSection/Collaborators"

function App() {
  return (
    <>
      <HeaderComponent />
      <SloganComponent />
      <TeamSectionComponent />
      <ProjectsComponent />
      <Collaborators />
      <Footer />
    </>
  );
}

export default App;
