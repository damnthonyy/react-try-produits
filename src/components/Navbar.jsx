import { useEffect, useState, useRef } from 'react';
import '../scss/navbar.scss';

import { Link } from 'react-router-dom';

export default function Navbar() {



    const [show, handleShow] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const showMenu = () => {
            const currentScrollY = window.scrollY;
            if (lastScrollY.current - currentScrollY > 5) {
                handleShow(true);

            } else if (currentScrollY - lastScrollY.current > 5) {
                handleShow(false);
            }
            lastScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", showMenu)
        return () => window.removeEventListener("scroll", showMenu);

    }, [])

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);
    const closeNav = () => setIsOpen(false);


    return (

        <div className="navBar">
            <div className="navBarContent">
                < Link to="/" className="logo">
                    Glense.<span className='logoS'>studio</span>
                </Link >
                <nav className={`navLink ${isOpen ? "isActive" : ""}`} style={{ display: show ? 'flex' : 'none' }}>
                    <div className='linkQuery'>
                        <span className='link' onClick={closeNav} > <Link className='Link' to="/">home</Link> </span>
                        <span className='link' onClick={closeNav} > <Link className='Link' to="/Studio">studio</Link> </span>
                        <span className='link' onClick={closeNav} ><Link className='Link' to="/Gallery">gallery</Link> </span>
                        <span className='link' onClick={closeNav} ><Link className='Link' to="/Services">services</Link> </span>
                        <span className='link' onClick={closeNav} ><Link className='Link' to="/Contacts">Contacts</Link></span>
                    </div>
                    <div className='rMobile'>
                        <div className='rMobileContent'>
                            <span className='x-2 styleF'> Glense.studio 2024</span>
                            <span className='x-1 styleF'>
                                <Link to="/#" className='rs' onClick={closeNav} > instagram</Link>
                                <Link to="/#" className='rs' onClick={closeNav} > dribble</Link>
                                <Link to="/#" className='rs' onClick={closeNav} >linkedin </Link>
                            </span>
                            <span className='x-3 styleF rs'> ott, CA 9:34pm</span>
                        </div>
                    </div>
                </nav>
                {!show && <div className="menu">Menu</div>}
                <div className='menuMobile' onClick={toggleNav} > Menu</div>

            </div>
        </div>

    )
}