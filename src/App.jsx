import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import WorkVideo from './pages/WorkVideo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="clients" element={<Clients />} />
          <Route path="work-video" element={<WorkVideo />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
