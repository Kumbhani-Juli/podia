import React from 'react'
import '../../assets/styles/switchToPodiaSectionsCSS/switchPageIntegrationSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const SwitchPageIntegrationSection = () => {
    const sectionData = [
        {
            title: "Website builder",
            content: "Build a beautiful, high-performing website in less than 10 minutes. No coding or design skills required.",
        },
        {
            title: "Online store",
            content: "Sell anything. Upload your content and leave the hosting, checkout, and delivery to us.",
        },
        {
            title: "Email marketing",
            content: "A powerful email platform that works seamlessly with your store, no messy integrations required.",
        },
        {
            title: "Landing pages",
            content: "Sales pages and landing pages designed to help you grow your audience and make more sales.",
        },
        {
            title: "Blogging",
            content: "Launch a blog that looks just the way you want it to, and publish posts with ease.",
        },
    ]
    return (
        <>
            <div className='switch-page-integration-section-container'>
                <div className='switch-page-integration-section-content'>
                    <div className='switch-page-integration-section-left-content'>
                        <h3>A tangled, expensive mess of software held together by unreliable integrations? No thanks.</h3>
                        <p>Podia gives you everything you need in one place, for one fair price. No more figuring out new tools or struggling to connect them.</p>
                    </div>
                    <div className='switch-page-integration-section-right-content'>
                        {
                            sectionData?.map((data, index) => (
                                <div className='switch-page-integration-section-right-inner-content' key={index}>
                                    <h4>{data?.title} <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '16px' }} /></h4>
                                    <p>{data?.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwitchPageIntegrationSection
