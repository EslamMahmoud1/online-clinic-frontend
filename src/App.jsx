import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Doctors from "./Doctors";
import NavHeader from "./NavHeader";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ForDoctors from "./ForDoctors";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Route exact path="/" component={Home} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Doctors" component={Doctors} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/ForDoctors" component={ForDoctors} />
      <Sidebar />
    </div>
  );
}

export default App;
