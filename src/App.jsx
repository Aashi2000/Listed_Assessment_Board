import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Transactions from './pages/Transactions'
import Schedules from './pages/Schedules'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Help from './pages/Help'
import ContactUs from "./pages/ContactUs";

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About/>} />
      <Route path="/transactions" element={<Transactions/>} />
      <Route path="/schedules" element={<Schedules/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/help" element={<Help/>} />
      <Route path="/contactus" element={<ContactUs/>} />
    </Routes>
  </Router>
  
  );
}

export default App;
