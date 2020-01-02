import React, { Component } from 'react'

class BrandsArea extends Component {
    render() {
        return (
            <div>
                <section className="brands-area">
                    <div className="container">
                        <div className="brand-wrap">
                            <div className="row align-items-center active-brand-carusel justify-content-start no-gutters">
                                <div className="col single-brand">
                                    <a href="#"><img className="mx-auto" src="img/brand/b1.png" alt="" /></a>
                                </div>
                                <div className="col single-brand">
                                    <a href="#"><img className="mx-auto" src="img/brand/b2.png" alt="" /></a>
                                </div>
                                <div className="col single-brand">
                                    <a href="#"><img className="mx-auto" src="img/brand/b3.png" alt="" /></a>
                                </div>
                                <div className="col single-brand">
                                    <a href="#"><img className="mx-auto" src="img/brand/b4.png" alt="" /></a>
                                </div>
                                <div className="col single-brand">
                                    <a href="#"><img className="mx-auto" src="img/brand/b5.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default BrandsArea
