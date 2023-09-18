import TeamsectionComponent from "../components/TeamSectionComponent";
import SloganComponent from "../components/SloganComponent";
import Footer from "../components/FooterComponent";
import ProjectsComponent from "../components/apps/ProjectsComponent";
import Collaborators from "../components/Collaborators";
import FAQs from "../components/faqs/FAQsComponent";

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