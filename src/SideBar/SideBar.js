import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./SideBar.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Define menu items with optional submenus
  const menuItems = [
    { label: 'Home', to: '/', key: 'home' },
    { label: 'Portraits', to: '/portraits', key: 'portraits' },
    { label: 'Polaroids', to: '/polaroids', key: 'polaroids' },
    {
      label: 'Projects',
      key: 'projects',
      submenus: [
        { label: 'Reverence and Ruin', to: '/projects' },
        { label: 'Nnamdi 25', to: '/projects/nnamdi-25' },
        { label: 'Virtual Limbs', to: '/projects/virtual-limbs' },
      ],
    },
    { label: 'About', to: '/info', key: 'about' },
    { label: 'Contact', to: '/contact', key: 'contact' },
    { label: 'Blog', to: '/blog', key: 'blog' },
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">IAN MCINTOSH</h2>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div key={item.key}>
            {item.submenus ? (
              <button
                className="nav-link nav-link-expandable"
                onClick={() => toggleExpand(item.key)}
                aria-expanded={expanded[item.key]}
              >
                {item.label}
                <span className={`expand-icon ${expanded[item.key] ? 'open' : ''}`}>
                  ▼
                </span>
              </button>
            ) : (
              <NavLink to={item.to} className="nav-link">
                {item.label}
              </NavLink>
            )}
            {item.submenus && expanded[item.key] && (
              <div className="submenu">
                {item.submenus.map((sub, idx) => (
                  <NavLink key={idx} to={sub.to} className="submenu-link">
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
        <a href="https://instagram.com/ianmaccreates" className="nav-link" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
