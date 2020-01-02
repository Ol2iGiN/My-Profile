import React, { Component } from 'react'

export class HomeBannerArea extends Component {
    render() {
        return (
            <div>
                <section className="home-banner-area">
                    <div className="container">
                        <div className="row fullscreen d-flex align-items-center">
                            <div className="banner-content col-lg-6 col-md-12 justify-content-center ">
                                <div className="me wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">It's me</div>
                                <h1 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.7s">Pongthep Ditthakerd</h1>
                                <div className="designation mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay="2.1s">
                                    Fullstack <span className="designer">Developer</span><br/>Base in <span className="developer">React, Laravel</span>
                                </div>
                                <a href className="primary-btn" data-text="Hire Me">
                                    <span>H</span>
                                    <span>i</span>
                                    <span>r</span>
                                    <span>e</span>
                                    <span> </span>
                                    <span>M</span>
                                    <span>e</span>
                                </a>
                            </div>
                            <div className="banner-img col-lg-6 col-md-6 align-self-end">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/pongthep-img.png`} alt="banner" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomeBannerArea
