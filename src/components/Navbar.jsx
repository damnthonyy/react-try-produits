import { useEffect, useState, useRef } from 'react';
import '../scss/navbar.scss';

import { Link } from 'react-router-dom';

export default function Navbar() {

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

    return (

        <div className="navBar">
            <div className="navBarContent">
                < Link to="/" className="logo">
                    Glense.<span className='logoS'>studio</span>
                </Link >
                <nav className="navLink" style={{ display: show ? 'flex' : 'none' }} >
                    <span className='link'> <Link className='Link' to="/">home</Link> </span>
                    <span className='link'> <Link className='Link' to="/Studio">studio</Link> </span>
                    <span className='link'><Link className='Link' to="/Gallery">gallery</Link> </span>
                    <span className='link'><Link className='Link' to="/Services">services</Link> </span>
                    <span className='link'><Link className='Link' to="/Contacts">Contacts</Link></span>
                </nav>
                {!show && <div className="menu">Menu</div>}
            </div>
        </div>

    )
}