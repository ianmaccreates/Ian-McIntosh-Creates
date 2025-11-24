import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./SideBar.css";
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Sidebar = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Define menu items with optional submenus
  const menuItems = [
    { label: 'Home', to: '/', key: 'home' },
    { label: 'Portfolio', to: '/portfolio', key: 'portfolio' },
    {
      label: 'Polaroids',
      key: 'polaroids',
      submenus: [
        { label: 'Polacon 7', to: '/polaroids/polacon-7' },
        { label: 'Polacon 8', to: '/polaroids/polacon-8' },
        { label: 'Polacon 9', to: '/polaroids/polacon-9' },
        { label: 'Polacon 10', to: '/polaroids/polacon-10' },
      ],
    },
    {
      label: 'Projects',
      key: 'projects',
      submenus: [
        { label: 'Reverence and Ruin', to: '/projects' },
        { label: 'Nnamdi 25', to: '/projects/nnamdi-25' },
        { label: 'Virtual Limbs', to: '/projects/virtual-limbs' },
            { label: 'NoNoMango', to: '/projects/nonomango' },
            { label: 'Xpan', to: '/projects/xpan' },
            { label: 'Italian Car Fest 22', to: '/projects/italiancarfest22' },
            { label: 'Abby Mueller', to: '/projects/abby-mueller' },
            { label: 'Dickies Skate Park', to: '/projects/dickies-skate-park' },
            { label: 'Kara Dominguez', to: '/projects/kara-dominguez' },
            { label: 'Lonely Laundromat', to: '/projects/lonely-laundromat' },
            { label: 'Michelle Taylor', to: '/projects/michelle-taylor' },
            { label: 'Nick Bike', to: '/projects/nick-bike' },
            { label: 'Vanta', to: '/projects/vanta' },
      ],
    },
    { label: 'About', to: '/info', key: 'about' },
    { label: 'Contact', to: '/contact', key: 'contact' },
    { label: 'Blog', href: 'https://ianmaccreates.substack.com/', key: 'blog' },
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
            ) : item.href ? (
              <a href={item.href} className="nav-link" target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
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
      <div className="sidebar-footer">
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
