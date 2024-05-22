import '../scss/navbar.scss';

import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
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
        </>
    )
}