import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollToTopButton from "./ScrollToTop";
import App from "@/App";
import Solutions from "@/Pages/Solutions";
import Researches from "@/Pages/Researches";
import Learn from "@/Pages/Learn";
import About from "@/Pages/About";

import Blogs from "@/Pages/Blogs";
import WebDev from "@/Pages/WebDev";
import AppDev from "@/Pages/AppDev";
import Researchlearnmorek from "@/Pages/Researchlearnmorek";
import ResearchLearnMoreLM from "@/Pages/ResearchLearnMoreLM";
import Insights from "@/Pages/Insights";
import Footer from "./Footer";
import DataScience from "@/Pages/DataScience";
import Contact from "@/Pages/Contact";
import Page1 from "@/Pages/AboutButtons/Page1";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/research" element={<Researches />} />
        <Route path="/learn" element={<Learn />} />
        
          <Route path="/about" element={<About />} ></Route>
          <Route path="/about/page1" element={<Page1 />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Blogs />} />
        <Route path="/web-developement" element={<WebDev />} />
        <Route path="/app-developement" element={<AppDev />} />
        <Route path="/ResearchLearnMore" element={<Researchlearnmorek />} />
        <Route path="/ResearchLearnMoreLA" element={<ResearchLearnMoreLM />} />
        <Route path="/InsightsLearn" element={<Insights />} />
        <Route path="/data-science" element={<DataScience />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
