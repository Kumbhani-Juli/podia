import React from 'react';
import '../../assets/styles/pricingPageSectionCSS/pricingPageCompareSection.css';

const PricingPageCompareSection = () => {
    const sectionData = [
        {
            mainTitle: "Website",
            rowData: [
                {
                    title: "Transaction fees",
                    mover: "5%",
                    shaker: "0%",
                },
                {
                    title: "Full website",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Pre-made templates",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "SEO",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Blog",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Landing pages",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Email forms",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Free Unsplash images",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Messaging (live chat)",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Custom domain",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Media library",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Turn off Podia branding",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Third-party code",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Google Analytics",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Google Ads",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Facebook Pixel",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Pinterest Pixel",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Zapier triggers",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Zapier actions",
                    mover: "\u2715",
                    shaker: "\u2713",
                },
            ]
        },
        {
            mainTitle: "Online store",
            rowData: [
                {
                    title: "Online courses",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Digital downloads",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Coaching",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Webinars",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Product bundles",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Coupons",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Waitlists",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Sign up limits",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Access duration",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Payment plans",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Upsells",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Course certificates",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Stripe",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "PayPal",
                    mover: "\u2715",
                    shaker: "\u2713",
                },
                {
                    title: "Affiliate marketing",
                    mover: "\u2715",
                    shaker: "\u2713",
                },
            ]
        },
        {
            mainTitle: "Email marketing",
            middleTitle: "Free",
            rightTitle: "Paid",
            rowData: [
                {
                    title: "Subscribers",
                    mover: "100",
                    shaker: "Only pay for what you need",
                },
                {
                    title: "Email templates",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Email designer",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Email forms",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Landing pages",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Lead magnets",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Lead magnets",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Blog post emailing",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Email automation",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Segmentation",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Tagging",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Email analytics",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Free migrations",
                    mover: "\u2715",
                    shaker: "\u2713",
                },
            ]
        },
        {
            mainTitle: "Support",
            rowData: [
                {
                    title: "Email support",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Chat support",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Podia community access",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
                {
                    title: "Free migrations",
                    mover: "\u2713",
                    shaker: "\u2713",
                },
            ]
        },
    ]
    return (
        <div className='pricing-page-compare-section-container'>
            <div className='pricing-page-compare-section-title'>
                <h1>Compare plan features</h1>
            </div>
            <div className='pricing-page-compare-section-content'>

                {
                    sectionData?.map((data, index) => (
                        <>
                            <div className='feature-header' key={index}>{data?.mainTitle}</div>
                            <div className='plan-header'>{data?.middleTitle ? data.middleTitle : 'Mover'}</div>
                            <div className='plan-header'>{data?.rightTitle ? data.rightTitle : 'Shaker'}</div>
                            {
                                data?.rowData?.map((data, index) => (
                                    <>
                                        <div className='feature-item' key={index}>{data?.title}</div>
                                        <div className='plan-detail'>{data?.mover}</div>
                                        <div className='plan-detail'>{data?.shaker}</div>
                                    </>
                                ))
                            }
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default PricingPageCompareSection;
