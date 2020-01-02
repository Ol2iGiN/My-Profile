import React, { Component } from 'react'

class AboutArea extends Component {
    render() {
        return (
            <div> 
                <section className="about-area section-gap">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 about-left">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/about-img.jpg`} alt="about" />
                            </div>
                            <div className="col-lg-5 col-md-12 about-right">
                                <div className="section-title">
                                    <h2>about myselt</h2>
                                </div>
                                <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                    <p>I am currently working at Advanced iService company as a Fullstack Developer, responsible for development website asearcher.com . My total experience is 10 year in Web Developer skills using PHP, Laravel, Codeigniter, NodeJS, JSON encode for Backend Website, Web API and using HTML, CSS, Javascript, Jquery, AJAX, JSON decode, Reactjs, Redux, Vuejs, Nuxtjs for Frontend Website. And I can design and analysis systems in basic level.
          </p>
                                </div>
                                <a href="#" className="primary-btn white" data-text="More Info">
                                    <span>M</span>
                                    <span>o</span>
                                    <span>r</span>
                                    <span>e</span>
                                    <span> </span>
                                    <span>I</span>
                                    <span>n</span>
                                    <span>f</span>
                                    <span>o</span>
                                </a>
                                <a href="#" className="primary-btn" data-text="Resume">
                                    <span>R</span>
                                    <span>e</span>
                                    <span>s</span>
                                    <span>u</span>
                                    <span>m</span>
                                    <span>e</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default AboutArea
