import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Main() {
    return (
        <div>
            <h1>Main</h1>
            <ul>
                <li><Link className={'/'}>[Main]</Link></li>
                <li><NavLink className={'/guestbook'}>[Guestbook]</NavLink></li>
                <li><NavLink to={'/gallery'}>[Gallery]</NavLink></li>
            </ul>
        </div>
    );
}