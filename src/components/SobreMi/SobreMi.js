import React, { Component } from 'react'
export default class SobreMi extends Component {
    render() {
        return (
            <>
            <section id="about" className="s-about target-section">
                <div className="row">
                    <div className="column large-3 tab-12">
                        <img className="s-about__pic" src="images/avatars/user-lucia.jpg" alt="" />
                    </div>
                    <div className="column large-9 tab-12 s-about__content">
                        <h3>Sobre mí</h3>
                        <p>
                            ¡Hola! mi nombre es Lucía Bermejo Solivellas. Después de licenciarme en Psicología y tras una larga trayectoria profesional en el sector administrativo/educativo, decidí dar un giro laboral y meterme de lleno en el mundo digital, formándome como "Full Stack Developer" y realizando diversos cursos de diseño UX/UI y Marketing Digital
                        </p>
                        <hr />
                        <div className="row s-about__content-bottom">
                            <div className="column w-1000-stack">
                                <h3>Detalles de Contacto</h3>
                                <p>
                                    Lucía Bermejo <br />
                                    Cuatro Caminos<br />
                                    Madrid 28020 España <br />
                                    <a href="tel:+34696925484">+34 696 925 484</a> <br />
                                    <a href="mailto:#0">lubersol@gmail.com</a>
                                </p>
                            </div>
                            <div className="column w-1000-stack">
                                <a href="#0" className="btn btn--download">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                                    Descargar CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
