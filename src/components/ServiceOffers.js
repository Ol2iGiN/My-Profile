import React, { Component } from 'react'

class ServiceOffers extends Component {
    render() {
        return (
            <div>
                <section className="service-area section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>Service Offers</h2>
                                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see
            some for as low as $.17 each.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-service wow fadeInUp" data-wow-duration="1s">
                                    <span className="lnr lnr-screen" />
                                    <h4>
                                        <span>Web</span> Design
          </h4>
                                    <p>If you’re looking blank casvsettes on the web, you may confuse.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-service wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <span className="lnr lnr-laptop-phone" />
                                    <h4><span>Application</span> Development
          </h4>
                                    <p>If you’re looking blank casvsettes on the web, you may confuse.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-service wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <span className="lnr lnr-database" />
                                    <h4><span>Web</span> Development
          </h4>
                                    <p>If you’re looking blank casvsettes on the web, you may confuse.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-service wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                                    <span className="lnr lnr-chart-bars" />
                                    <h4><span>Web</span> Development
          </h4>
                                    <p>If you’re looking blank casvsettes on the web, you may confuse.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default ServiceOffers
