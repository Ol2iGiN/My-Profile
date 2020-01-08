import React, { Component } from 'react'
import WorkAreaItem from './WorkAreaItem'

class WorkArea extends Component {
    render() {
        return (
            <div>
                <section className="work-area section-gap-top section-gap-bottom-90" id="work">
                    <div className="container">
                        <div className="row d-flex justify-content-between align-items-end mb-80">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>Past Works</h2>
                                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see
            some for as low as $.17 each.</p>
                                </div>
                            </div>
                        </div>
                        <div className="filters-content">
                            <div className="row grid">
                                <div className="single-work col-lg-4 col-md-6 col-sm-12 all creative wow fadeInUp" data-wow-duration="2s">
                                    <WorkAreaItem project_image_path="img/work/banner-asearcher.png" project_title="aSearcher" project_type="Client Project" />
                                </div>
                                <div className="single-work col-lg-4 col-md-6 col-sm-12 all web-design branding wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                    <WorkAreaItem project_image_path="img/work/w2.jpg" project_title="2D Vinyl Design" project_type="Client Project" />
                                </div>
                                <div className="single-work col-lg-4 col-md-6 col-sm-12 all branding web-design wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                                    <WorkAreaItem project_image_path="img/work/w3.jpg" project_title="2D Vinyl Design" project_type="Client Project" />
                                </div>
                                <div className="single-work col-lg-4 col-md-6 col-sm-12 all web-design wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <WorkAreaItem project_image_path="img/work/w6.jpg" project_title="2D Vinyl Design" project_type="Client Project" />
                                </div>
                                <div className="single-work col-lg-4 col-md-6 col-sm-12 all creative wow fadeInUp" data-wow-duration="2s">
                                    <WorkAreaItem project_image_path="img/work/w4.jpg" project_title="2D Vinyl Design" project_type="Client Project" />
                                </div>
                                <div className="single-work col-lg-4 col-md-6 col-sm-12 all branding wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                    <WorkAreaItem project_image_path="img/work/w5.jpg" project_title="2D Vinyl Design" project_type="Client Project" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default WorkArea
