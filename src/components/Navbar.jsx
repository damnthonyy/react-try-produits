import '../scss/navbar.scss';


export default function Navbar() {
    return (
        <>
            <div className="navBar">
                <div className="navBarContent">
                    <p className="logo">
                        Glense.studio
                    </p>
                    <nav className="navLink">
                        <a className='link' href="/Studio"> studio</a>
                        <a className='link' href="/Gallery"> Gallery</a>
                        <a className='link' href="/services"> Services</a>
                        <a className='link' href="Contacts"> Contacts</a>
                    </nav>
                </div>
            </div>
        </>
    )
}