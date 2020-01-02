import React, { Component } from 'react'
import JobHistoryItem from './JobHistoryItem'

class JobHistoryArea extends Component {
    render() {
        return (
            <div>
                <section className="job-area section-gap-top section-gap-bottom-90">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>Job History</h2>
                                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see
            some for as low as $.17 each.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <JobHistoryItem position="Fullstack Developer" company="Advanced iService" location="Bangkok" startDate="Jul '15" endDate="Present">
                                    <div className="bottom-sec wow fadeIn" data-wow-duration="2s">
                                        All users on MySpace will know that there are millions of people out there. Every day besides. All users on My will know
                                        that there are millions of people out of the field there.
                                    </div>
                                </JobHistoryItem>
                            </div>
                            <div className="col-lg-6">
                                <JobHistoryItem position="Programmer Analysis" company="Advanced Systems Consulting" location="Bangkok" startDate="Mar '14" endDate="Apr '18">
                                    <div className="bottom-sec wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                        All users on MySpace will know that there are millions of people out there. Every day besides. All users on My will know
                                        that there are millions of people out of the field there.
                                    </div>
                                </JobHistoryItem>
                            </div>
                            <div className="col-lg-6">
                                <JobHistoryItem position="PHP Programmer" company="Seven Republic" location="Bangkok" startDate="Mar '12" endDate="Feb '14">
                                    <div className="bottom-sec wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                        All users on MySpace will know that there are millions of people out there. Every day besides. All users on My will know
                                        that there are millions of people out of the field there.
                                    </div>
                                </JobHistoryItem>
                            </div>
                            <div className="col-lg-6">
                                <JobHistoryItem position="Intern Web Developer" company="TOT Main Office" location="Bangkok" startDate="Mar '09" endDate="May '09">
                                    <div className="bottom-sec wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                        All users on MySpace will know that there are millions of people out there. Every day besides. All users on My will know
                                        that there are millions of people out of the field there.
                                    </div>
                                </JobHistoryItem>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default JobHistoryArea
