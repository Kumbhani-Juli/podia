import React from 'react'
import PricingPageTopSection from './pricingPageSections/PricingPageTopSection'
import PricingPageCompareSection from './pricingPageSections/PricingPageCompareSection'
import PricingPageMiddleSection from './pricingPageSections/PricingPageMiddleSection'
import PricingPageFAQSection from './pricingPageSections/PricingPageFAQSection'

const PricingPage = () => {
    return (
        <>
            <PricingPageTopSection />
            <PricingPageCompareSection />
            <PricingPageMiddleSection />
            <PricingPageFAQSection />
        </>
    )
}

export default PricingPage
