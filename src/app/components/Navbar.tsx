import './components.css';
import Link from 'next/link';



const Navbar = () => {
    return (
     <>
      <div className="navbar">
        <div className="logo">
            <span>T</span>ahira.
        </div>
        <ul className="navlist">
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
            <Link href="/about">About</Link>
            </li>
            <li>
            <Link href="/services">Services</Link>
            </li>
            <li>
            <Link href="/skills">Skills</Link>
            </li>
            <li>
            <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
            <Link href="/contact">Contact</Link>
            </li>
        </ul>
        <div className=' menu-icon  bx bx-menu'></div>

        </div>

        

     </>
       
    );
  };
  
  export default Navbar;
  