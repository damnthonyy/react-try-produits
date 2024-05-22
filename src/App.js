import './reset.scss';



import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Main from "./pages/Main.jsx";
import Studio from "./pages/Studio.jsx";
import Services from "./pages/Services.jsx";
import Contacts from "./pages/Contacts.jsx";
import Gallery from "./pages/Gallery.jsx";


const App = () => {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Studio" element={<Studio />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>

  );
};

export default App;
