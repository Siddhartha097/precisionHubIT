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
import Solutions2 from "@/Pages/Solutions2";
import FirstButton from "@/Pages/HomeButtons/FirstButton";
import SecondButton from "@/Pages/HomeButtons/SecondButton";
import Seemless from "@/Pages/HomeButtons/Seemless";
import Simplify from "@/Pages/HomeButtons/Simplify";
import Elevate from "@/Pages/HomeButtons/Elevate";
import TransFormingBusiness from "@/Pages/TransFormingBusiness";
import Page2 from "@/Pages/AboutButtons/Page2";

// import NewContact from "@/Pages/AboutButtons/NewContact";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions2" element={<Solutions2 />} />
        <Route path="/research" element={<Researches />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/page1" element={<Page1 />} />
        <Route path="/about/page2" element={<Page2/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Blogs />} />
        {/* <Route path="#faq" element={<Faq />} /> */}
        <Route path="/seemless%integration" element={<Seemless />} />
        <Route path="/simplify%to%amplify" element={<Simplify />} />
        <Route path="/elevate%efficiency" element={<Elevate />} />
        <Route path="/transforming%business" element={<TransFormingBusiness />} />
        <Route
          path="/Transforming%Ideas%into%Powerful%Solutions"
          element={<SecondButton />}
        />
        <Route
          path="/Transforming%businesses%with%innovative%software%solutions"
          element={<FirstButton />}
        />
        <Route path="/web-developement" element={<WebDev />} />
        <Route path="/app-developement" element={<AppDev />} />
        <Route path="/ResearchLearnMore" element={<Researchlearnmorek />} />
        <Route path="/ResearchLearnMoreLA" element={<ResearchLearnMoreLM />} />
        <Route path="/InsightsLearn" element={<Insights />} />
        <Route path="/data-science" element={<DataScience />} />
      </Routes>
      <Footer  />
    </>
  );
};

export default AppRoutes;
