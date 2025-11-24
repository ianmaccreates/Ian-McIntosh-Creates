import logo from './logo.svg';
import './App.css';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import ReverenceAndRuin from './Projects/ReverenceAndRuin/ReverenceAndRuin';
import Nnamdi25 from './Projects/Nnamdi/Nnamdi25';
import VirtualLimbs from './Projects/VirtualLimbs/VirtualLimbs';
import Polacon7 from './Projects/Polacon/Polacon7/Polacon7';
import Polacon8 from './Projects/Polacon/Polacon8/Polacon8';
import Polacon9 from './Projects/Polacon/Polacon9/Polacon9';
import Polacon10 from './Projects/Polacon/Polacon10/Polacon10';
import Xpan from './Projects/Xpan/Xpan';
import NoNoMango from './Projects/NoNoMango/NoNoMango';
import ItalianCarFest22 from './Projects/ItalianCarFest/ItalianCarFest22';
import AbbyMueller from './Projects/AbbyMueller/AbbyMueller';
import DickiesSkatePark from './Projects/DickiesSkatePark/DickiesSkatePark';
import KaraDominguez from './Projects/KaraDominguez/KaraDominguez';
import LonelyLaundromat from './Projects/LonelyLaundromat/LonelyLaundromat';
import MichelleTaylor from './Projects/MichelleTaylor/MichelleTaylor';
import NickBike from './Projects/NickBike/NickBike';
import Vanta from './Projects/Vanta/Vanta';
import KierraWilson from './Projects/KierraWilson/KierraWilson';
import StephanieJames from './Projects/StephanieJames/StephanieJames';
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

const Contact = () => <div className="page"><h2>Contact</h2></div>;

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/polaroids/polacon-7" element={<Polacon7 />} />
        <Route path="/polaroids/polacon-8" element={<Polacon8 />} />
        <Route path="/polaroids/polacon-9" element={<Polacon9 />} />
        <Route path="/polaroids/polacon-10" element={<Polacon10 />} />
        <Route path="/projects" element={<ReverenceAndRuin />} />
        <Route path="/projects/nnamdi-25" element={<Nnamdi25 />} />
        <Route path="/projects/virtual-limbs" element={<VirtualLimbs />} />
        <Route path="/projects/nonomango" element={<NoNoMango />} />
        <Route path="/projects/italiancarfest22" element={<ItalianCarFest22 />} />
        <Route path="/projects/abby-mueller" element={<AbbyMueller />} />
        <Route path="/projects/dickies-skate-park" element={<DickiesSkatePark />} />
        <Route path="/projects/kara-dominguez" element={<KaraDominguez />} />
        <Route path="/projects/lonely-laundromat" element={<LonelyLaundromat />} />
        <Route path="/projects/michelle-taylor" element={<MichelleTaylor />} />
        <Route path="/projects/nick-bike" element={<NickBike />} />
        <Route path="/projects/vanta" element={<Vanta />} />
        <Route path="/projects/kierra-wilson" element={<KierraWilson />} />
        <Route path="/projects/stephanie-james" element={<StephanieJames />} />
        <Route path="/projects/xpan" element={<Xpan />} />
        <Route path="/info" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
