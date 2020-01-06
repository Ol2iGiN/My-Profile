import React from 'react'

function WorkAreaItem(props) {
    return (
        <div className="relative">
            <div className="thumb">
                <div className="overlay overlay-bg" />
                <img className="image img-fluid" src={props.project_image_path} alt />
            </div>
            <div className="middle">
                <h4>{{ props.project_title}}</h4>
                <div className="cat">Client Project</div>
            </div>
            <a className="overlay" href="portfolio-details.html" />
        </div>
    )
}

export default WorkAreaItem
