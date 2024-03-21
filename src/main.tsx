import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import App from "./App.tsx";

import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTopButton from "./components/ScrollToTop.tsx";

import Solutions from "./Pages/Solutions.tsx";
import Researches from "./Pages/Researches.tsx";
import Learn from "./Pages/Learn.tsx";
import About from "./Pages/About.tsx";
import Contact from "./Pages/Contact.tsx";
import Blogs from "./Pages/Blogs.tsx";
import WebDev from "./Pages/WebDev.tsx";
import AppDev from "./Pages/AppDev.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/research" element={<Researches />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Blogs />} />
        <Route path="/web-developement" element={<WebDev />} />
        <Route path="/app-developement" element={<AppDev />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
