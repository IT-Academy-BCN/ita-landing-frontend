import { useDispatch } from "react-redux";
import { setIsLogged } from "../../store/reducers/apiCall/apiPostRegisterLogin";
function BackOffice() {
  const dispatch = useDispatch()
  return (
    <>
      <h1>Back Office</h1>
      <button onClick={()=> dispatch(setIsLogged(false)) } className="btn btn-outline">Log Out</button>
    </>
  );
}

export default BackOffice;