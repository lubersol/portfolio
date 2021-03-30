import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div id="home" className="s-header">
                <div className="row s-header__nav-wrap">
                    <nav className="s-header__nav">
                        <ul>
                            <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
                            <li><a className="smoothscroll" href="#SobreMi">Sobre mí</a></li>
                            <li><a className="smoothscroll" href="#Educacion">Educacion</a></li>
                            <li><a className="smoothscroll" href="#Portfolio">Portfolio</a></li>
                            <li><a className="smoothscroll" href="#Contacto">Contacto</a></li>
                        </ul>
                    </nav>
                </div> 
                <a className="s-header__menu-toggle" href="#0" title="Menu">
                    <span className="s-header__menu-icon" />
                </a>
            </div> 
    )
    }
}