
import './App.css';
import { Navbar } from './navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DIYProjects from './pages/DIYProjects';
import CV from './pages/CV';
import WorkExperiance from './pages/WorkExperiance';
import FamiliyHistory from './pages/FamiliyHistory';
import ContactMe from './pages/ContactMe';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/DIYProjects" element={<DIYProjects />} />
        <Route path="/pages/CV" element={<CV />} />
        <Route path="/pages/WorkExperiance" element={<WorkExperiance />} />
        <Route path="/pages/FamiliyHistory" element={<FamiliyHistory />} />
        <Route path="/pages/ContactMe" element={<ContactMe />} />
        <Route path="/pages/AboutMe" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
