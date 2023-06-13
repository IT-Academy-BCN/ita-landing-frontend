import "./App.css";

import TeamSectionComponent from "./components/teamSection/TeamSectionComponent"
import SloganComponent from "./components/SloganComponent"
import Footer from "./components/FooterComponent"
import ProjectsComponent from "./components/ProjectsComponent"
import Collaborators from "./components/CollaboratorsSection/Collaborators"
import FAQs from "./components/FAQsComponent"
import {useState} from 'react';
function App() {
  const [swapTheme,setSwapTheme]=useState('light');
  return (
    < >
     
     <html data-theme={swapTheme}>
       
      <SloganComponent />
      <ProjectsComponent />
      <TeamSectionComponent />
      <Collaborators />
      <FAQs />
      <Footer /> 

    </html>
     
    </>
  );
}

export default App;
