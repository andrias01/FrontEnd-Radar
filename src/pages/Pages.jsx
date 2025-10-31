import { Route,Routes } from "react-router-dom"

import RadarLandingPage from "../components/RadarLandingPage"
import RadarLogin from "../components/RadarLogin"
import AdminDashboard from "../components/AdminDashboard"
import InstitutionDashboard from "../components/InstitutionDashboard"
import CompanyDashboard from "../components/CompanyDashboard"


function Pages() {
  return (
    <Routes>
        <Route path="/" element={<RadarLandingPage />} />
        <Route path="/RadarLogin" element={<RadarLogin />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/institutionDashboard" element={<InstitutionDashboard />} />
        <Route path="/companyDashboard" element={<CompanyDashboard />} />
        {/* <Route path="/loginAdmin" element={<LoginAdminPage />} />
        <Route path="/ShowAdmins" element={<ShowAdmins />} />
        <Route path="/ManagementAdmin" element={<AdminManagement />} />
        <Route path="/CommonZone" element={<CommonZone />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/Loading" element={<Loading />} /> */}
        <Route path="*" element={<RadarLandingPage />} />


    </Routes>
  )
}

export default Pages
