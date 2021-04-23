import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="s-footer">
                    <div className="row">
                        <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
                            <ul className="s-hero__content-social">
                               <li><a href="https://github.com/lubersol" target="_blank" rel="noreferrer"><i class="fab fa-github" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/lucía-bermejo" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                            </ul>
                        </div>
                        <div className="column large-7 medium-6 w-1000-stack ss-copyright">
                            <span>© Copyright Ceevee 2021</span>
                            <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
                        </div>
                    </div>
                    <div className="ss-go-top">
                        <a className="smoothscroll" title="Back to Top" href="#top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z" /></svg>
                        </a>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}
