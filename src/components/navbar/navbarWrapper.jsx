import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/navbarWrapper.scss'

const NavbarWrapper = () =>{
    return(
        <div className="general">
            <div className="navbarWrapper">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">Sobre mi</Link>
                <Link className="link" to="/about">Experiencia</Link>
                <Link className="link" to="/about">Proyectos</Link>
                <Link className="link" to="/about">Contactame</Link>
            </div>
        </div>
    )
}

export default NavbarWrapper;