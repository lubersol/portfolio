import React, { Component } from 'react'
export default class Contacto extends Component {
    render() {
        return (
            <>
                <section id="contacto" className="s-contact target-section">
                    <div className="row s-contact__header">
                        <div className="column large-12">
                            <h3 className="section-header-allcaps">Contáctame!</h3>
                        </div>
                    </div>
                    <div className="row s-contact__content">
                        <div className="column large-7 medium-12">
                            <h4 className="huge-text">
                                Quieres que trabajemos juntos? Tienes algún proyecto en marcha? Hagamos algo increíble juntos.
                                Vamos a convertir esa idea en un gran producto :)
                            </h4>
                        </div>
                        <div className="column large-4 medium-12">
                            <div className="row contact-infos">
                                <div className="column large-12 medium-6 tab-12">
                                    <div className="contact-block">
                                        <h5 className="contact-block__header">
                                            Email
                                        </h5>
                                        <p className="contact-block__content">
                                            <a className="mailtoui" href="mailto:lubersol@gmail.com">lubersol@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="column large-12 medium-6 tab-12">
                                    <div className="contact-block">
                                        <h5 className="contact-block__header">
                                            Móvil
                                        </h5>
                                        <p className="contact-block__content">
                                            <a href="tel:+34696925484">+34 696 925 484</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="column large-12">
                                    <a href="mailto:lubersol@gmail.com" className="mailtoui btn btn--primary h-full-width">Hablemos!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
