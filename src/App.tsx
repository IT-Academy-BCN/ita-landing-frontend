import "./App.css";
import TeamSectionComponent from "./components/teamSection/TeamSectionComponent"
import SloganComponent from "./components/SloganComponent"
import HeaderComponent from "./components/HeaderComponent"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeaderComponent />
      <SloganComponent />
      <TeamSectionComponent />
      <Footer />
    </>
  );
}

export default App;

