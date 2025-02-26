
import './CSS/App.css';
import { Navbar } from './navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DIYProjects from './pages/DIYProjects';
import CV from './pages/CV';
import WorkExperiance from './pages/WorkExperiance';
import FamilyHistory from './pages/FamiliyHistory';
import ContactMe from './pages/ContactMe';
import AboutMe from './pages/AboutMe';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';
import Project6 from './pages/Project6';
import AiHelperButton from './AIHelper';
import WelcomeModal from './pages/WelcomeModal';
import InformationRelative from './pages/InfoRelativeFamilyHistory';
import CVEnglish from './pages/CVEnglish';
import PoliticsSearch from './pages/Politics';


function App() {
  return (
    <div>
      <Navbar />
      <WelcomeModal/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/DIYProjects" element={<DIYProjects />} />
        <Route path="/pages/CV" element={<CV />} />
        <Route path="/pages/WorkExperiance" element={<WorkExperiance />} />
        <Route path="/pages/FamiliyHistory" element={<FamilyHistory />} />
        <Route path="/pages/ContactMe" element={<ContactMe />} />
        <Route path="/pages/AboutMe" element={<AboutMe />} />
        <Route path="/pages/Project1" element={<Project1/>}/>
        <Route path="/pages/Project2" element={<Project2/>}/>
        <Route path="/pages/Project3" element={<Project3/>}/>
        <Route path="/pages/Project4" element={<Project4/>}/>
        <Route path="/pages/Project5" element={<Project5/>}/>
        <Route path="/pages/Project6" element={<Project6/>}/>
        <Route  path="/pages/InfoRelativeFamilyHistory" element={<InformationRelative/>}/>
        <Route  path="/pages/CVEnglish" element={<CVEnglish/>}/>
        <Route  path="/pages/Politics" element={<PoliticsSearch/>}/>

        
      </Routes>
      <AiHelperButton/>
    </div>
  );
}

export default App;
