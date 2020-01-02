import React from 'react'
import HomeBannerArea from '../components/HomeBannerArea'
import BrandsArea from '../components/BrandsArea'
import AboutArea from '../components/AboutArea'
import WorkArea from '../components/WorkArea'
import JobHistoryArea from '../components/JobHistoryArea'
import ServiceOffers from '../components/ServiceOffers'
import ContactMe from '../components/ContactMe'

const Home = ()=>{
    return(
        <div>
            <HomeBannerArea/>
            <BrandsArea/>
            <AboutArea/>
            <WorkArea/>
            <JobHistoryArea/>
            <ServiceOffers/>
            <ContactMe/>
        </div>
    )
}

export default Home