import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Academics from "./components/pages/Academics";
import Admissions from "./components/pages/Admissions";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import Portal from "./components/pages/Portal";
import StudentDashboard from "./components/pages/portal/StudentDashboard";
import StaffDashboard from "./components/pages/portal/StaffDashboard";
import ParentDashboard from "./components/pages/portal/ParentDashboard";
import DigitalLibrary from "./components/pages/portal/DigitalLibrary";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f8fafc]">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/portal/student" element={<StudentDashboard />} />
            <Route path="/portal/staff" element={<StaffDashboard />} />
            <Route path="/portal/parent" element={<ParentDashboard />} />
            <Route path="/portal/library" element={<DigitalLibrary />} />          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}