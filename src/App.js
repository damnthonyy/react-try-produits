import './reset.scss';


import Main from './pages/Main.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card.jsx';

import Studio from "./pages/Studio.jsx";
import Services from "./pages/Services.jsx";
import Contacts from "./pages/Contacts.jsx";
import Gallery from "./pages/Gallery.jsx";


const App = () => {
  return (
    <>
      <Main />
      <Router>
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
