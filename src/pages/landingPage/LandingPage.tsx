import TeamsectionComponent from "./teamSection/TeamSectionComponent";
import SloganComponent from "./SloganComponent";
import Footer from "./FooterComponent";
import ProjectsComponent from "./ProjectsComponent";
import Collaborators from "./CollaboratorsSection/Collaborators";
import FAQs from "./FAQsComponent";

function LandingPage() {
  return (
    <>
     
      <SloganComponent />
      <ProjectsComponent />
      <TeamsectionComponent />
      <Collaborators />
      <FAQs />
      <Footer />
    </>
  );
}

export default LandingPage;