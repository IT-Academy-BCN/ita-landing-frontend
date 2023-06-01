import TeamsectionComponent from "./teamSection/TeamSectionComponent";
import SloganComponent from "./SloganComponent";
import HeaderComponent from "./HeaderComponent"
import Footer from "./FooterComponent";
import ProjectsComponent from "./ProjectsComponent";
import Collaborators from "./CollaboratorsSection/Collaborators";
import FAQs from "./FAQsComponent";

function LandingPage() {
  return (
    <>
      <HeaderComponent />
      <SloganComponent />
      <TeamsectionComponent />
      <ProjectsComponent />
      <Collaborators />
      <FAQs />
      <Footer />
    </>
  );
}

export default LandingPage