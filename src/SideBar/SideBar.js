import { NavLink } from 'react-router-dom';
import "./SideBar.css";

const Sidebar = () => (
  <aside className="sidebar">
    <h2 className="sidebar-title">IAN MCINTOSH</h2>
    <nav className="sidebar-nav">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/portraits" className="nav-link">Portraits</NavLink>
      <NavLink to="/polaroids" className="nav-link">Polaroids</NavLink>
      <NavLink to="/projects" className="nav-link">Projects</NavLink>
      <NavLink to="/info" className="nav-link">About</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
      <NavLink to="/blog" className="nav-link">Blog</NavLink>
      <a href="https://instagram.com/ianmaccreates" className="nav-link" target="_blank" rel="noopener noreferrer">Instagram</a>
    </nav>
  </aside>
);

export default Sidebar;
