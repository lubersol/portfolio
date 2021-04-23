import React, { Component } from 'react';
export default class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="portfolio" className="s-portfolio target-section">
                    <div className="row s-portfolio__header">
                        <div className="column large-12">
                            <h3>Mis últimos proyectos</h3>
                        </div>
                    </div>
                    <div className="row collapse block-large-1-3 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
                        <div className="column folio-item">
                            <a href="#modal-01" className="folio-item__thumb">
                                <img src="images/portfolio/videoblub.jpg" srcSet="images/portfolio/videoclub.png 1x, 
                           images/portfolio/videoclub@2x.png 2x" alt="" />
                            </a>
                        </div>
                        <div className="column folio-item">
                            <a href="#modal-02" className="folio-item__thumb">
                                <img src="images/portfolio/canllobera.png" srcSet="images/portfolio/canllobera.png 1x, 
                           images/portfolio/canllobera@2x.png 2x" alt="" />
                            </a>
                        </div>
                        <div className="column folio-item">
                            <a href="#modal-06" className="folio-item__thumb">
                                <img src="images/portfolio/lubersol.png" srcSet="images/portfolio/lubersol.png 1x, 
                           images/portfolio/lubersol@2x.png 2x" alt="" />
                            </a>
                        </div>
                        <div className="column folio-item">
                            <a href="#modal-04" className="folio-item__thumb">
                                <img src="images/portfolio/witcher.png" srcSet="images/portfolio/witcher.png 1x, 
                           images/portfolio/witcher@2x.png 2x" alt="" />
                            </a>
                        </div>  
                        <div className="column folio-item">
                            <a href="#modal-05" className="folio-item__thumb">
                                <img src="images/portfolio/comecocos.png" srcSet="images/portfolio/comecocos.png 1x, 
                           images/portfolio/comecocos@2x.png 2x" alt="" />
                            </a>
                        </div>
                        <div className="column folio-item">
                            <a href="#modal-03" className="folio-item__thumb">
                                <img src="images/portfolio/dental.png" srcSet="images/portfolio/dental.png 1x, 
                           images/portfolio/dental@2x.png 2x" alt="" />
                            </a>
                        </div>
                        
                                              
                        
                        {/* <div className="column folio-item">
                            <a href="#modal-07" className="folio-item__thumb">
                                <img src="images/portfolio/rucksack.jpg" srcSet="images/portfolio/rucksack.jpg 1x, 
                           images/portfolio/rucksack@2x.jpg 2x" alt="" />
                            </a>
                        </div>
                        <div className="column folio-item">
                            <a href="#modal-08" className="folio-item__thumb">
                                <img src="images/portfolio/sanddunes.jpg" srcSet="images/portfolio/sanddunes.jpg 1x, 
                           images/portfolio/sanddunes@2x.jpg 2x" alt />
                            </a>
                        </div> */}
                    </div>
                    {/* Modal Templates Popup*/}
                    <div id="modal-01" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-droplet.jpg" alt="" />
                            <div className="modal-popup__desc">
                                <h5>Agroturismo en Mallorca</h5>
                                <p>API Rest creada con React en la parte de Front-end y con Laravel (PHP) en la parte de Back-end. Consiste en una aplicación donde se pueden hacer reservas para pasar una estancia en un agroturismo ubicado en Mallorca.</p>                                <ul className="modal-popup__cat">
                                    <li>Branding</li>
                                    <li>Product Design</li>
                                </ul>
                            </div>
                            <a href="https://github.com/lubersol/agroturismoVP-REACT.git" class="modal-popup__details">Link del proyecto</a>
                        </div>
                    </div>
                    <div id="modal-02" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-lamp.jpg" alt="" />
                            <div className="modal-popup__desc">
                                <h5>SKL Videoclub</h5>
                                <p>API Rest creada con React en la parte Front-end y Laravel (PHP) en la parte Back-end. Consiste en una plataforma de contenido audiovisual (películas) donde se pueden ver en streaming movies.</p>
                                <ul class="modal-popup__cat">
                                    <li>Branding</li>
                                </ul>
                            </div>
                            <a href="https://github.com/lubersol/videoclub_equipo.git" class="modal-popup__details">Link al proyecto</a>
                        </div>
                    </div>
                    <div id="modal-03" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-minimalismo.jpg" alt="" />
                            <div className="modal-popup__desc">
                                <h5>Clínica dental</h5>
                                <p>API Rest creada con React en la parte Front-end y NodeJS y Express en la parte Back-end. Consiste en una aplicación que simula una clínica dental donde se pueden hacer reservas y eliminarlas.</p>
                                <ul class="modal-popup__cat">
                                    <li>Product Design</li>
                                </ul>
                            </div>
                            <a href="https://github.com/lubersol/clinica-dental-react-2.git" class="modal-popup__details">Project link</a>
                        </div>
                    </div>
                    <div id="modal-04" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-shutterbug.jpg" alt="" />
                            <div className="modal-popup__desc">
                                <h5>Videoconsola</h5>
                                <p>Consola de videojuego comecocos creada con HTML5, CSS3 y JavaScript. Dispone de una función que, al pinchar el botón central de la consola, cambia la imagen central por una pantalla negra, simulando botón on/off; y de un efecto de transicion en la pantalla central que al posicionarte con el ratón cambia la imagen simulando movimiento en los comecocos de la pantalla central.</p>
                                <ul class="modal-popup__cat">
                                    <li>E-Commerce</li>
                                </ul>
                            </div>
                            <a href="https://github.com/lubersol/ConsolaComeCocos.git" class="modal-popup__details">Link al proyecto</a>
                        </div>
                    </div>
                    <div id="modal-05" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-fuji.jpg" alt="" />
                            <div className="modal-popup__desc">
                                <h5>Videojuego "The Witcher"</h5>
                                <p>Simulación de un videojuego de lucha creado con HTML5, CSS3 y JS. Consta de una pantalla de inicio con botón de 'Play' para pasar a pantalla con 4 jugadores. Se eligen 2 jugadores para y se pulsa el botón 'Fight' para comenzar la partida.</p>
                                <ul class="modal-popup__cat">
                                    <li>Product Design</li>
                                </ul>
                            </div>
                            <a href="https://github.com/lubersol/videojuego.git" class="modal-popup__details">Link al proyecto</a>
                        </div>
                    </div>
                    <div id="modal-06" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-skaterboy.jpg" alt="" />
                            <div className="modal-popup__desc">
                                <h5>Skaterboy</h5>
                                <p>Quisquam vel libero consequuntur autem voluptas. Qui aut vero. Omnis fugit mollitia cupiditate voluptas. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                <ul className="modal-popup__cat">
                                    <li>Branding</li>
                                    <li>Product Design</li>
                                </ul>
                            </div>
                            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                        </div>
                    </div>
                    <div id="modal-07" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-rucksack.jpg" alt="" />
                            <div className="modal-popup__desc">
                                <h5>Rucksack</h5>
                                <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
                                <ul className="modal-popup__cat">
                                    <li>Branding</li>
                                    <li>Product Design</li>
                                </ul>
                            </div>
                            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                        </div>
                    </div>
                    <div id="modal-08" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-sanddunes.jpg" alt="" />
                            <div className="modal-popup__desc">
                                <h5>Sand Dunes</h5>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                <ul className="modal-popup__cat">
                                    <li>Web Design</li>
                                </ul>
                            </div>
                            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}




