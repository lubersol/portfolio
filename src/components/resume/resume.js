import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="resume" className="s-resume target-section">
                    <div className="row s-resume__section">
                        <div className="column large-3 tab-12">
                            <h3 className="section-header-allcaps">Experiencia profesional</h3>
                        </div>
                        <div className="column large-9 tab-12">
                            <div className="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">GeeksHubs Academy</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Full Stack Developer</span>
                                        <span className="resume-block__header-date">
                                            septiembre 2020 - febrero 2021
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    Creación de diversos proyectos utilizando tecnologías y frameworks como React, NodeJS, Express, Laravel, MongoDB, mySQL, Git, Gitflow,JS, CSS3, HTML, etc. </p>
                            </div>
                            <div className="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">Yoseo Marketing</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Web Developer</span>
                                        <span className="resume-block__header-date">
                                            noviembre 2019 - diciembre 2019
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    Prácticas maquetando y optimizando websites mediante el CMS Wordpress y PHP.
                                </p>
                            </div>
                            <div className="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">British Council</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Customer Service Assistant</span>
                                        <span className="resume-block__header-date">
                                            abril 2000 - septiembre 2018
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    Edición y actualización de la web mediante CMS interno
                                    de la empresa y uso de Adobe Photoshop.
                                    Campañas de marketing online mediante plataforma
                                    Constant Contact.
                                    Gestión de la intranet del portal de clientes.
                                    Realización de focus groups, moderando dinámicas de
                                    grupos.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row s-resume__section">
                        <div className="column large-3 tab-12">
                            <h3 className="section-header-allcaps">Educación</h3>
                        </div>
                        <div className="column large-9 tab-12">
                            <div className="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">GeeksHub Academy</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Full Stack Developer</span>
                                        <span className="resume-block__header-date">
                                            septiembre 2020 - febrero 2021
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    Frontend: React JS, Redux, JavaScript, Wordpress.
                                    Backend: Node JS, Express, PHP, Laravel.<br />
                                    BBDD: MongoDB, mySQL.<br />
                                    Otros: Git, GitFlow, Docker, Scrum.
                                </p>
                            </div>
                            <div class="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">Fundación UNED</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Curso de Usabilidad, Diseño UX/UI y CRO</span>
                                        <span className="resume-block__header-date">
                                            marzo - julio 2000
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    Herramientas y metodologías.<br />
                                    Movilidad y SEO aplicados a UX.<br />
                                    Analítica y optimización.
                                </p>
                            </div>
                            <div class="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">Udemy</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Master en JavaScript</span>
                                        <span className="resume-block__header-date">
                                            agosto 2000
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    Tecnologías: JS, jQuery, Angular, NodeJS.
                                </p>
                            </div>
                            <div class="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">Academia Atrium</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Curso de Confección y Publicación de páginas Web</span>
                                        <span className="resume-block__header-date">
                                            marzo - julio 2019
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    Construcción de páginas web.<br />
                                Integración de componentes software en páginas web.<br />
                                Publicación de páginas web.
                                </p>
                            </div>
                            <div class="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">Google activate</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Fundamentos del Marketing digital</span>
                                        <span className="resume-block__header-date">
                                            octubre 2019
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    Tráfico web, publicidad y redes sociales.<br />
                                </p>
                            </div>
                            <div class="resume-block">
                                <div className="resume-block__header">
                                    <h4 className="h3">Universidad Complutense de Madrid</h4>
                                    <p className="resume-block__header-meta">
                                        <span>Licenciatura en Psicología</span>
                                        <span className="resume-block__header-date">
                                            marzo 2000
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}






