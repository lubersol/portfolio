import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="s-header">
                    <div className="row s-header__nav-wrap">
                        <nav className="s-header__nav">
                            <ul>
                                <li className="current"><a className="smoothscroll" href="#hero">INICIO</a></li>
                                <li><a className="smoothscroll" href="#about">SOBRE MI</a></li>
                                <li><a className="smoothscroll" href="#resume">EXPERIENCIA</a></li>
                                <li><a className="smoothscroll" href="#portfolio">PROYECTOS</a></li>
                                <li><a className="smoothscroll" href="#contact">CONTACTO</a></li>
                            </ul>
                        </nav>
                    </div>
                    <a className="s-header__menu-toggle" href="#0" title="Menu">
                        <span className="s-header__menu-icon"></span>
                    </a>
                </header>
                <section id="hero" className="s-hero target-section">
                    <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>
                    <div className="row s-hero__content">
                        <div className="column">
                            <div className="s-hero__content-about">
                                <h1>FSD Lucía Bermejo.</h1>
                                <h3>
                                    Soy <span>Full Stack Developer. </span><br />Trabajo con React, Express, MongoDB, NodeJS, Laravel, mySQL, etc...<br />
                                    Me encanta la programación y estoy en constante aprendizaje.
                                    </h3>
                                <div className="s-hero__content-social">
                                    <a href="https://github.com/lubersol" target="_blank" rel="noreferrer"><i class="fab fa-github" aria-hidden="true"></i></a>
                                    <a href="https://www.linkedin.com/in/lucía-bermejo" target="_blank" rel="noreferrer"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s-hero__scroll">
                        <a href="#about" className="s-hero__scroll-link smoothscroll">
                            <span className="scroll-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
                            </span>
                        </a>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
