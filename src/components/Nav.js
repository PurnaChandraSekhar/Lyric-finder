import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Nav = () => {
    return (
        <nav>
            <Link to="/" className="logo">Lyric Finder</Link>
        </nav>
    )
}


export default Nav;