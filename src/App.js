import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './pages/mainstyle.css';
import Mainpage from "./pages/main.js"
import About from "./pages/about.js"
import Contact from "./pages/contact.js"

function App() {
  return (
   <Router>
     <Route exact path="/">
      <Mainpage></Mainpage>
    </Route>

    <Route exact path ="/about"> <About></About> </Route>  
    <Route exact path ="/contact"><Contact></Contact></Route>
  </Router>
  );
}

export default App;
