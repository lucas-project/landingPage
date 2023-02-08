
import './css/styles.css';

//import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Pricing from './pages/pricing';
import Contact from './pages/contact';
import SignIn from './components/googleSignin/signIn';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact /> } />
          <Route path="/signin" element={<SignIn /> } />
      </Routes>
     
      
  );
}

export default App;
