import React from 'react'
import '../../assets/styles/switchToPodiaSectionsCSS/switchPageMiddleSection.css'

const SwitchPageMiddleSection = () => {
    const sectionData = [
        {
            title: "Supporting teams-of-one worldwide",
            content: "More than 150,000 customers in 167 countries.",
        },
        {
            title: "More than a decade in business",
            content: "In business since 2014. More than $500M earned by our customers.",
        },
        {
            title: "Not going anywhere",
            content: "Sustainably profitable and here to stay.",
        },
        {
            title: "Loved by entrepreneurs",
            content: "4.8/5 stars on both Capterra and G2.",
        },
    ]
    return (
        <>
            <div className='switch-page-middle-section-container'>
                <div className='switch-page-middle-section-title'>
                    <h2>Why entrepreneurs like you trust Podia with their business</h2>
                    <p>We have a long track record of supporting business owners, and we’re not going anywhere.</p>
                </div>
                <div className='switch-page-middle-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='switch-page-middle-section-inner-content' key={index}>
                                <h4>{data?.title}</h4>
                                <p>{data?.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SwitchPageMiddleSection
