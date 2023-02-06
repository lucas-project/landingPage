
import './css/styles.css';

//import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Pricing from './pages/pricing';
import Contact from './pages/contact';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact /> } />
      </Routes>
     
      
  );
}

export default App;
