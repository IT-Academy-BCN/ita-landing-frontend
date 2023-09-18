import { Route, Routes} from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import BackOffice from "../pages/BackOffice"
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