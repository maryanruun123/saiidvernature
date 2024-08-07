import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import HospitalServices from "./pages/HospitalServices";
import MedicalEducation from "./pages/MedicalEducation";
import HealthInsurance from "./pages/HealthInsurance";
import ResearchDevelopment from "./pages/ResearchDevelopment";
import NewsInsights from "./pages/NewsInsights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/hospital" element={<HospitalServices />} />
        <Route path="/services/education" element={<MedicalEducation />} />
        <Route path="/services/insurance" element={<HealthInsurance />} />
        <Route path="/research-development" element={<ResearchDevelopment />} />
        <Route path="/news-insights" element={<NewsInsights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
