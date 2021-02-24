import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './pages/mainstyle.css';
import Mainpage from "./pages/main.js"
import About from "./pages/about.js"
import Contact from "./pages/contact.js"

function App() {
  return (
   <Router>
     <Route path="/">
      <Mainpage></Mainpage>
    </Route>

    <Route path ="/about"> <About></About> </Route>  
    <Route path ="/contact"><Contact></Contact></Route>
  </Router>
  );
}

export default App;
