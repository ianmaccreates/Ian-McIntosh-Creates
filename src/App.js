import logo from './logo.svg';
import './App.css';
import About from './About/About';
import ReverenceAndRuin from './Projects/ReverenceAndRuin/ReverenceAndRuin';
import Nnamdi25 from './Projects/Nnamdi/Nnamdi25';
import VirtualLimbs from './Projects/VirtualLimbs/VirtualLimbs';
import Polacon7 from './Projects/Polacon/Polacon7';
import Polacon8 from './Projects/Polacon/Polacon8';
import Polacon9 from './Projects/Polacon/Polacon9';
import Polacon10 from './Projects/Polacon/Polacon10';
import { Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Where is it?</p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
    </header>
  );
}

const Portraits = () => <div className="page"><h2>Portraits</h2></div>;
const Contact = () => <div className="page"><h2>Contact</h2></div>;

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/polaroids/polacon-7" element={<Polacon7 />} />
        <Route path="/polaroids/polacon-8" element={<Polacon8 />} />
        <Route path="/polaroids/polacon-9" element={<Polacon9 />} />
        <Route path="/polaroids/polacon-10" element={<Polacon10 />} />
        <Route path="/projects" element={<ReverenceAndRuin />} />
        <Route path="/projects/nnamdi-25" element={<Nnamdi25 />} />
        <Route path="/projects/virtual-limbs" element={<VirtualLimbs />} />
        <Route path="/info" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
