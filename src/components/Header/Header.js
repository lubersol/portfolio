import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="s-header">
                <div className="row s-header__nav-wrap">
                    <nav className="s-header__nav">
                        <ul>
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#sobremi">Sobre mí</a></li>
                            <li><a className="smoothscroll" href="#educacion">Educacion</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                            <li><a className="smoothscroll" href="#contacto">Contacto</a></li>
                        </ul>
                    </nav>
                </div> 
                <a className="s-header__menu-toggle" href="#0" title="Menu">
                    <span className="s-header__menu-icon" />
                </a>
            </header> 
    )
    }
}