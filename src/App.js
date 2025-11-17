import logo from './logo.svg';
import './App.css';
import About from './About/About';
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
const Polaroids = () => <div className="page"><h2>Polaroids</h2></div>;
const Projects = () => <div className="page"><h2>Projects</h2></div>;
const Contact = () => <div className="page"><h2>Contact</h2></div>;
const Blog = () => <div className="page"><h2>Blog</h2></div>;

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/polaroids" element={<Polaroids />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/info" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </main>
  );
}

export default App;
