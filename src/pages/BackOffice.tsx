import { useDispatch } from "react-redux";
import { setIsLogged } from "../store/reducers/apiCall/apiPostRegisterLogin";
import ViewBackOffice from "../components/BackOfficeComponent";
function BackOffice() {
  const dispatch = useDispatch()
  return (
    <>
      <ViewBackOffice setIsLogged={setIsLogged} dispatch={dispatch} /> 
    </>
  );
}

export default BackOffice;