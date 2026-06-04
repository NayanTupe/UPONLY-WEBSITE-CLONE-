import React, { useState } from "react";
import { LogIn, CalendarDays, Menu, X } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About SMOS", link: "#about" },
    { label: "How It Works", link: "#how-it-works" },
    { label: "Products", link: "#products" },
    { label: "Capabilities", link: "#capabilities" },
    { label: "Impact", link: "#impact" },
    { label: "Contact", link: "#contact" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#home" className="logo-box" onClick={closeMenu}>
          <img src="/uponly-logo.png" alt="UpOnly Technologies" />
        </a>

        <nav className={`nav-menu ${open ? "active" : ""}`}>
          {navItems.map((item) => (
            <a href={item.link} key={item.label} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <div className="mobile-actions">
            <button className="login-btn">
              <LogIn size={16} />
              Login / Sign Up
            </button>

            <button className="demo-btn">
              <CalendarDays size={16} />
              Book a Demo
            </button>
          </div>
        </nav>

        <div className="header-actions">
          <button className="login-btn">
            <LogIn size={16} />
            Login / Sign Up
          </button>

          <button className="demo-btn">
            <CalendarDays size={16} />
            Book a Demo
          </button>
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;