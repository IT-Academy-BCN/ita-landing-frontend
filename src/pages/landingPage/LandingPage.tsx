import TeamsectionComponent from "./components/teamSection/TeamSectionComponent";
import SloganComponent from "./components/slogan/SloganComponent";
import Footer from "./components/footer/FooterComponent";
import ProjectsComponent from "./components/apps/ProjectsComponent";
import Collaborators from "./components/colaborator/Collaborators";
import FAQs from "./components/faqs/FAQsComponent";

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