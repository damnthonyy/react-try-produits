import { useEffect, useState } from 'react';
import '../scss/navbar.scss';

import { Link } from 'react-router-dom';

export default function Navbar() {

    const [show, handleShow] = useState(false);
    const showMenu = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleShow)
        return () => window.removeEventListener("scroll", handleShow);
    }, [])

    return (

        <div className="navBar">
            <div className="navBarContent">
                < Link to="/" className="logo">
                    Glense.<span className='logoS'>studio</span>
                </Link >
                <nav className="navLink">
                    <span className='link'> <Link className='Link' to="/">home</Link> </span>
                    <span className='link'> <Link className='Link' to="/Studio">studio</Link> </span>
                    <span className='link'><Link className='Link' to="/Gallery">gallery</Link> </span>
                    <span className='link'><Link className='Link' to="/Services">services</Link> </span>
                    <span className='link'><Link className='Link' to="/Contacts">Contacts</Link></span>
                </nav>
            </div>
        </div>

    )
}