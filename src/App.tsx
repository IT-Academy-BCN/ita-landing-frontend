import "./App.css";

import TeamSectionComponent from "./components/teamSection/TeamSectionComponent"
import SloganComponent from "./components/SloganComponent"
import HeaderComponent from "./components/HeaderComponent"
import Footer from "./components/Footer"
import ProjectsComponent from "./components/ProjectsComponent"
import Collaborators from "./components/CollaboratorsSection/Collaborators"
import FAQs from "./components/FAQsComponent"

function App() {
  return (
    <>
      <HeaderComponent />
      <SloganComponent />
      <TeamSectionComponent />
      <ProjectsComponent />
      <Collaborators />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
