import './App.css';
import { Skills } from './components/Skills/Skills';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import { CodingProfiles } from './components/Coding_handles/Coding';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Skills />
      <CodingProfiles />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
