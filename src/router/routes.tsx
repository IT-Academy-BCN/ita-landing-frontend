import { Route, Routes} from "react-router-dom"
import LandingPage from "../pages/landingPage/LandingPage"
import BackOffice from "../pages/backOffice/BackOffice"
import ModalApps from "../pages/landingPage/modalApps"
import ProtectedRoute from "./protectedRoutes"

function Router() {
    return(
        <>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route element={<ProtectedRoute/>}>
                <Route path="/backoffice" element={<BackOffice/>} />
                <Route path="/backoffice/:id" element={<ModalApps/>} />
            </Route>
        </Routes>
        </>
    )
}

export default Router;