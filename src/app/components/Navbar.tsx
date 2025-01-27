"use client";

import './components.css';
import Link from 'next/link';
import { useState } from 'react';



import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <span>{"𝑻𝒂𝒉𝒊𝒓𝒂  "}</span>{"𝑹𝒂𝒋𝒑𝒖𝒕."}
        </div>
        <ul className={`navlist ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link href="/" style={{ "--i": 1 } as React.CSSProperties}>Home</Link>
          </li>
          <li>
            <Link href="about" style={{ "--i": 2 } as React.CSSProperties}>About</Link>
          </li>
          <li>
          <Link href="services" style={{ "--i": 3 } as React.CSSProperties}>Services</Link>
          </li>
          <li>
          <Link href="skills" style={{ "--i": 4 } as React.CSSProperties}>Skills</Link>
          </li>
          <li>
          <Link href="projects" style={{ "--i": 5 } as React.CSSProperties}>Projects</Link>
          </li>
          <li>
          <Link href="contact" style={{ "--i": 6 } as React.CSSProperties}>Contact</Link>
          </li>
        </ul>
        <button 
          className="menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} className='mx'/>}
        </button>
      </div>
    </>
  );
}

export default Navbar;