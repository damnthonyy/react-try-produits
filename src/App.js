import './reset.scss';


import Main from './pages/Main.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card.jsx';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/events/:eventId" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
