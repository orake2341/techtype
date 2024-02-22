import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import CustomerPortal from "./pages/CustomerPortal/Portal";
import Joborder from "./pages/CustomerPortal/Joborder";
import PaymentHistory from "./pages/CustomerPortal/Paymenthistory";
import Settings from "./pages/CustomerPortal/Settings";
import JobOrderForm from "./pages/CustomerPortal/JobOrderForm";
import AdminJobOrderForm from "./pages/Admin/JobOrderForm";
import Dashboard from "./pages/Admin/Dashboard";
import JobOrder from "./pages/Admin/JobOrder";
import Modal from "./components/Joborder/modal";
import PaymentModal from "./components/AdminJoborder/paymentmodal";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/customerportal" element={<CustomerPortal />}>
            <Route path="" element={<Navigate to="joborder" />} />
            <Route path="joborder" element={<Joborder />}>
              <Route path=":id" element={<JobOrderForm />} />
            </Route>
            <Route path="paymenthistory" element={<PaymentHistory />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/admin" element={<Dashboard />}>
            <Route path="" element={<Navigate to="joborder" />} />
            <Route path="joborder" element={<JobOrder />}>
              <Route path="joborderform/:id" element={<AdminJobOrderForm />} />
              <Route path="payment/:id" element={<PaymentModal />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
