import React from 'react'
import sectionImg from '../../assets/images/pricingPageImgs/middleSectionImg1.avif'
import '../../assets/styles/pricingPageSectionCSS/pricingPageMiddleSection.css'

const PricingPageMiddleSection = () => {
    return (
        <>
            <div className='pricing-page-middle-section-container'>
                <div className='pricing-page-middle-section-content'>
                    <div className='pricing-page-middle-section-left-content'>
                        <img src={sectionImg} alt='section-img' />
                    </div>
                    <div className='pricing-page-middle-section-right-content'>
                        <h1>I couldn’t imagine running my business without Podia!</h1>
                        <p>Over 150,000 solo business owners like you use Podia to put their website, online store, and email marketing in one place. That means we’ve seen businesses like yours before, and we’re here to help.</p>
                        <small>Meg McMillan
                        Meg Marie Photography</small><br />
                        <button>Get started for free</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingPageMiddleSection
