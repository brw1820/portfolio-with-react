import React, {useEffect} from 'react';
// import SiteContainer from "./components/SiteContainer";
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home.jsx.js.js";
import Contact from './pages/Contact.jsx.js.js';
import Resume from './pages/Resume.jsx.js.js';
import "./pages/Assets/style.css";
import Nav from "./components/Nav.jsx.js.js";
import Projects from "./pages/Projects.jsx.js.js"

// const App = () => <SiteContainer />;

function App() {
  useEffect(()  =>  {
    axios.get("/api/config").then(response => {
      console.log(response.data)
    })
}, [])
return (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      {/* <Route exact path="/about" component={About}/> */}
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/projects" component={Projects}/>
    </Switch>
  </Router>
);
}



export default App;
