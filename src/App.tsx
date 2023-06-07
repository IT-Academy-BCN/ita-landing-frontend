import "./App.css";

import TeamSectionComponent from "./components/teamSection/TeamSectionComponent"
import SloganComponent from "./components/SloganComponent"
import Footer from "./components/FooterComponent"
import ProjectsComponent from "./components/ProjectsComponent"
import Collaborators from "./components/CollaboratorsSection/Collaborators"
import FAQs from "./components/FAQsComponent"

function App() {
  return (
    <>
      
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
