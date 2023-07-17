import { Route, Routes} from "react-router-dom"
import LandingPage from "../pages/landingPage/LandingPage"
import BackOffice from "../pages/backOffice/BackOffice"
import ProtectedRoute from "./protectedRoutes"

function Router() {
    return(
        <>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route element={<ProtectedRoute/>}>
                <Route path="/backoffice" element={<BackOffice/>} />
            </Route>
        </Routes>
        </>
    )
}

export default Router;