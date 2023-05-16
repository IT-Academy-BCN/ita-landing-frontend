import "./App.css";
import Collaborators from "./components/Collaborators";
import { CollaboratorsProvider } from "./contexts/CollaboratorsContext.tsx"


function App() {
  return (
    <>
      <CollaboratorsProvider>
        <Collaborators />
      </CollaboratorsProvider>
    </>
  );
}

export default App;
