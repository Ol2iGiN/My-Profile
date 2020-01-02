import React, { Component } from 'react'

class JobHistoryItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dateWork: `${props.startDate} to ${props.endDate}`
        }
    }
    render(){
        return (
            <div className="single-job">
                <div className="top-sec d-flex justify-content-between">
                    <div className="top-left">
                        <h4>{this.props.position}</h4>
                        <p>{this.props.company}, {this.props.location}</p>
                    </div>
                    <div className="top-right">
                        <a href="#" className="primary-btn" data-text={this.state.dateWork}>
                            <span>{this.state.dateWork}</span>
                        </a>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default JobHistoryItem
