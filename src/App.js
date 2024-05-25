import './reset.scss';
import Lenis from 'lenis';




import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Main from "./pages/Main.jsx";
import Studio from "./pages/Studio.jsx";
import Services from "./pages/Services.jsx";
import Contacts from "./pages/Contacts.jsx";
import Gallery from "./pages/Gallery.jsx";
import { useEffect, useState } from 'react';
import Loader from './components/Loader.jsx';
import { CSSTransition } from 'react-transition-group';

import Card from "./components/Card.jsx";
import worksDetails from "./data.js";
import DetailsCard from './pages/DetailsCard.jsx';

const App = () => {


  const lenis = new Lenis()

  lenis.on('scroll', (e) => {

  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }


  requestAnimationFrame(raf)

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }

    fakeDataFetch();
  }, [])

  const data = { worksDetails };
  console.log(data);


  return isLoading ? (
    <CSSTransition in={isLoading} timeout={500} classNames="loader" unmountOnExit>
      <Loader />
    </CSSTransition>

  ) : (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Studio" element={<Studio />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Gallery" element=< Card data={data} /> />
          <Route path="/Details/:name" element=< DetailsCard data={data} /> />
        </Routes>
      </Router>
    </>

  );
};

export default App;
