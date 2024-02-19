import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import CustomerPortal from "./pages/CustomerPortal/Portal";
import Joborder from "./pages/CustomerPortal/Joborder";
import PaymentHistory from "./pages/CustomerPortal/Paymenthistory";
import Settings from "./pages/CustomerPortal/Settings";

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
            <Route path="joborder" element={<Joborder />} />
            <Route path="paymenthistory" element={<PaymentHistory />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
