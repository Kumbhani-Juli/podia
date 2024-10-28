import React from 'react'
import '../../assets/styles/switchToPodiaSectionsCSS/switchPageMigrationSection.css'

const SwitchPageMigrationSection = () => {
    const sectionData = [
        {
            title: "Sign up for an annual plan",
            content: "Migrations are free for all plans with yearly billing.",
        },
        {
            title: "Fill out a short migration request form",
            content: "Tell us where your content and subscribers are hosted.",
        },
        {
            title: "Sit back and relax",
            content: "We’ll handle the rest! Our team will be in touch as your migration proceeds.",
        },
    ]
    return (
        <>
            <div className='switch-page-migration-section-container'>
                <div className='switch-page-migration-section-title'>
                    <h2>Let us do the heavy lifting</h2>
                    <p>All of our annual plans come with free migrations. Our team will move your products, email automations, and email list over to Podia for you.</p>
                    <button>Get free migration</button>
                </div>
                <div className='switch-page-migration-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='switch-page-migration-section-inner-content' key={index}>
                                <div className='switch-page-migration-section-inner-content-sr-no'>
                                    <p>{index + 1}</p>
                                </div>
                                <div className='switch-page-migration-section-inner-content-body'>
                                    <h1>{data?.title}</h1>
                                    <p>{data?.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SwitchPageMigrationSection
