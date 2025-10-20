// App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./App.css";

import AnimatedLogo from "./components/layouts/AnimatedLogo/AnimatedLogo";
import PageTransition from "./components/layouts/PageTransition/PageTransition";
import FadePage from "./components/layouts/FadePage/FadePage";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Nav from "./components/ui/Nav/Nav";
import Footer from "./components/ui/Footer/Footer";
import CustomCursor from "./components/layouts/CustomCursor/CustomCursor";
// import ScrollToTopButton from "./components/layouts/ScrollToTopButton/ScrollToTopButton"
import DetailProjectWrapper from "./pages/DetailProjectWrapper/DetailProjectWrapper";
import VantaBackground from "./components/layouts/AniamtedHomeBackground/AnimatedHomeBackground"
import ScrollToTop from "./components/layouts/ScrollToTop/ScrollToTop";
import Page404 from "./pages/404/404";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <PageTransition />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <PageTransition />
              <About />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <PageTransition />
              <Projects />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <PageTransition />
              <Contact />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <PageTransition />
              <Page404 />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <PageTransition />
              <Projects />
            </>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <>
              <PageTransition />
              <DetailProjectWrapper />
            </>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router basename="/my-portfolio">
      <CustomCursor />
      {/* <ScrollToTopButton /> */}
      {showSplash ? (
        <AnimatedLogo onFinish={() => setShowSplash(false)} />
      ) : (
        <FadePage>
          <Nav />
          <ScrollToTop />
          <AnimatedRoutes />
          <Footer />
          <VantaBackground />
        </FadePage>

      )}
    </Router>
  );
}

export default App;
