import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BackOffice from "../pages/BackOffice";
import ProtectedRoute from "./protectedRoutes";
import ResetPasswordPage from "../pages/ResetPasswordPage";

function Router() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/backoffice" element={<BackOffice />} />
        </Route>
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      </Routes>
    </>
  );
}

export default Router;
