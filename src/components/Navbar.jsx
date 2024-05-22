import { useEffect, useState, useRef } from 'react';
import '../scss/navbar.scss';

import { Link } from 'react-router-dom';

export default function Navbar() {



    function useWindowWidth() {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowWidth;
    }

    const [show, handleShow] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const showMenu = () => {
            const currentScrollY = window.scrollY;
            if (lastScrollY.current - currentScrollY > 10) {
                handleShow(true);

            } else if (currentScrollY - lastScrollY.current > 10) {
                handleShow(false);
            }
            lastScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", showMenu)
        return () => window.removeEventListener("scroll", showMenu);

    }, [])

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);


    return (

        <div className="navBar">
            <div className="navBarContent">
                < Link to="/" className="logo">
                    Glense.<span className='logoS'>studio</span>
                </Link >
                <nav className={`navLink ${isOpen ? "isActive" : ""}`} style={{ display: show ? 'flex' : 'none' }}>
                    <div className='linkQuery'>
                        <span className='link'> <Link className='Link' to="/">home</Link> </span>
                        <span className='link'> <Link className='Link' to="/Studio">studio</Link> </span>
                        <span className='link'><Link className='Link' to="/Gallery">gallery</Link> </span>
                        <span className='link'><Link className='Link' to="/Services">services</Link> </span>
                        <span className='link'><Link className='Link' to="/Contacts">Contacts</Link></span>
                    </div>
                    <div className='rMobile'>
                        <div className='rMobileContent'>
                            <span className='x-2 styleF'> Glense.studio 2024</span>
                            <span className='x-1 styleF'>
                                <Link to="/#" className='rs'> instagram</Link>
                                <Link to="/#" className='rs'> dribble</Link>
                                <Link to="/#" className='rs'>linkedin </Link>
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