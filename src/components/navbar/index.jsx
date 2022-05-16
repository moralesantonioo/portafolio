import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import NavbarWrapper from './navbarWrapper'
import '../../styles/navbar.scss'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open)
    }

    return(
        <div className="navbar">
            <div className="logo">
                <div className="title-logo">
                    <span className="initial-letter-name">A</span>
                </div>
                <span className="content-name">ntonio</span>
            </div>
            <div className="navbar-nav">
                <div className="nav">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about" >Sobre mi</Link>
                    <Link className="link" to="/about">Experiencia</Link>
                    <Link className="link" to="/about">Proyectos</Link>
                    <Link className="link" to="/about">Contactame</Link>
                </div>
                <div className="nav-icon">
                    { !open ? 
                        <FontAwesomeIcon onClick={openMenu} className="icon-menu" icon={faBars} /> :
                        <FontAwesomeIcon onClick={openMenu} className="icon-menu" icon={faXmark} /> 
                    }
                    { open ? <NavbarWrapper/> : !<NavbarWrapper/>}
                </div>
            </div>
        </div>
    )
}

export default Navbar;