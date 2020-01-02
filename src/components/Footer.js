import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="footer-top flex-column">
                                    <div className="footer-logo">
                                        <a href="#">
                                            <img src="img/logo.png" alt />
                                        </a>
                                        <h4>Follow Me</h4>
                                    </div>
                                    <div className="footer-social">
                                        <a href="https://web.facebook.com/origin.muserza" target="_blank"><i className="fa fa-facebook" /></a>
                                        <a href="https://twitter.com/Ol2iGiN" target="_blank"><i className="fa fa-twitter" /></a>
                                        <a href="https://www.linkedin.com/in/pongthep-d-3035b0b2/" target="_blank"><i className="fa fa-linkedin" /></a>
                                        <a href="https://github.com/Ol2iGiN" target="_blank"><i className="fa fa-github" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row footer-bottom justify-content-center">
                            <p className="col-lg-8 col-sm-12 footer-text">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
