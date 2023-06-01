import { Route, Routes} from "react-router-dom"
import LandingPage from "../pages/landingPage/LandingPage"
import BackOffice from "../pages/backOffice/BackOffice"


function Router() {
    return(
        <>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/backoffice" element={<BackOffice/>} />
        </Routes>
        </>
    )
}

export default Router