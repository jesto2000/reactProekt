import React from 'react';
import h from './Navbar.module.css';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    let stile =h.link + h.me  ;

    return <nav className={h.nav}>
        <div className={`${h.link}      ${h.me}`}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <NavLink to="/profile" activeClassName={h.active}>Profile</NavLink>
        </div>
        <div className={h.link}>
            <NavLink to="/dialogs" activeClassName={h.active}>Messages</NavLink>
        </div>
        <div className={h.link}>
            <NavLink to="/users" activeClassName={h.active}>users</NavLink>
        </div>
        <div className={h.link}>
            <a>Musiks</a>
        </div>
        <div className={h.link}>
            <a>Settings</a>
        </div>
        <div className={stile}>ggggggggg</div>
    </nav>
}

export default Navbar;