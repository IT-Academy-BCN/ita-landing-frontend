import TeamsectionComponent from "../components/TeamSectionComponent";
import SloganComponent from "../components/SloganComponent";
import Footer from "../components/FooterComponent";
import ProjectsComponent from "../components/apps/ProjectsComponent";
import Collaborators from "../components/Collaborators";
import FAQs from "../components/faqs/FAQsComponent";

function LandingPage() {
  return (
    <>
      <div className="max-w-7xl">
        <SloganComponent />
        <ProjectsComponent />
        <TeamsectionComponent />
        <Collaborators />
        <FAQs />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
