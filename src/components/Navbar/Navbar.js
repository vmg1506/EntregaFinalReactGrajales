import '../Header/Header.css';
import * as React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import Cartwidget from '../Cartwidget/Cartwidget'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// NAVBAR
function Navbar() {
    return (
        <div className="App-header__nav-container">
            <nav className="App-header__nav">
                <ul>
                    <li className="nav__sections">
                    </li>
                    <li className="nav__sections  pointer-none">
                        <h3 className="nav__titles pointer-none">Productos{ <ArrowDropDownIcon/>} </h3>
                        <ul className="dropdown">
                            <li><Link to="type/Juegos">Juegos</Link></li>
                            <li><Link to="type/Perifericos">Perifericos</Link></li>
                            <li><Link to="type/Consolas">Consolas</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <Cartwidget/>
        </div>
    )
}

export default Navbar;