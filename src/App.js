import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Preloader from "../src/Components/Pre";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume/ResumeNew";
import ScrollToTop from "./Components/ScrollToTop";
import "./styles.css";
import "./App.css";
import Contact from "./Components/Contact/Contact";

export default function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename="/portfolio">
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Redirect fro="*" to="/"/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
