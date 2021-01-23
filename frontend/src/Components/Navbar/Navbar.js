import React from 'react' ;
import './Navbar.css' ;

const Navbar = props => {
    return(
    <header className="Navbar">
        <nav>
            <div className="logo">
                <h1><a href="/home">LOGO<span>.</span></a></h1>
            </div>

            <div className="searchBar">
                <input type="text" placeholder="Search"/>
            </div>

            <div className="nav_links">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/map">Map</a></li>
                    <li><a href="/location">Location</a></li>
                    <li><a href="/about-us">About-us</a></li>
                </ul>
            </div>
        </nav>
    </header>);
}

export default Navbar;