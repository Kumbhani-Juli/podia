import React, { useState } from 'react'
import '../../assets/styles/switchToPodiaSectionsCSS/switchPageFAQSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const SwitchPageFAQSection = () => {
    const sectionData = [
        {
            title: "What features does Podia have?",
            contentData: [
                { content: "Podia is an all-in-one platform for running your online business. You get a full website, your own blog, unlimited landing pages, and the ability to sell digital products like courses, coaching, downloads, webinars, and any other type of file you like. Podia also includes your checkout cart, online store, affiliates, and email marketing so you don’t have to connect other tools." },
            ]
        },
        {
            title: "How much does Podia cost?",
            contentData: [
                { content: "Podia has two plans, Mover and Shaker. Here’s a quick look at Podia’s pricing, but you can learn more about what’s in each plan on the pricing page." },
                { content: "Mover: $33/month paid annually ($39/month paid monthly), 5% transaction fee: Includes your website, blog, landing pages, unlimited products, courses, and email marketing Shaker: $75/month paid annually ($89/month paid monthly), no transaction fees: Includes everything in Mover plus affiliates" },
                { content: "Podia also has a free 30-day trial where you can test all features before signing up." },
            ]
        },
        {
            title: "What plans include free migrations?",
            contentData: [
                { content: "Migrations of products and customers are completely free when you choose annual billing on the Mover or Shaker plan. Annual Mover plans include free migration for 20 products and annual Shaker plans include free migration for 30 products." },
                { content: "You can also get free email list migrations with any annual Podia Email plan." },
                { content: "We can migrate up to 10 products if you have a monthly Mover or Shaker plan in addition to an annual Podia Email plan." },
            ]
        },
        {
            title: "What’s included in Podia’s free migrations?",
            contentData: [
                {
                    content: "The number of products we can migrate depends on your plan.",
                    listData: [
                        { listContent: "- Annual Mover: 20 products" },
                        { listContent: "- Annual Shaker: 30 products" },
                        { listContent: "- Monthly Mover or Shaker + Annual Podia Email: 10 products" },
                    ]
                },
                {
                    content: "With any annual Podia Email plan, we’ll migrate:",
                    listData: [
                        { listContent: "- Subscribers" },
                        { listContent: "- Tags" },
                        { listContent: "- Segments" },
                        { listContent: "- Up to 5 email templates" },
                        { listContent: "- Up to 10 email campaigns" },
                    ]
                },
                { content: "If you need more products imported, send us a message at hello@podia.com to discuss your options." },
            ]
        },
        {
            title: "Can I pay you to build my website for me?",
            contentData: [
                { content: "While we don’t offer an official website-building service, we can recommend people who do. The Podia Pros are expert designers, specialists, and educators who know Podia inside and out." },
                { content: "Whether you need a done-for-you service or some fresh new ideas, the Podia Pros are here to help with web design services, admin assistance, course and product setup, and consultations. Learn more about hiring a Podia Pro here." },
            ]
        },
        {
            title: "How does Podia compare to other platforms?",
            contentData: [
                { content: "We’re glad you asked! Take a look at our comparison pages to see how Podia stacks up to tools like Kajabi, WordPress, Squarespace, StanStore, Systeme, and +40 more!" },
            ]
        },
    ]
    // const [showContent, setShowContent] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const handleAccordionData = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
    return (
        <>
            <div className='switch-page-faq-section-container'>
                <div className='switch-page-faq-section-content'>
                    <div className='switch-page-faq-section-left-content'>
                        <h2>Frequently asked questions</h2>
                    </div>
                    <div className='switch-page-faq-section-right-content'>
                        {
                            sectionData?.map((data, index) => (
                                <div className='switch-page-faq-section-right-content-faq-boxs' key={index}
                                    onClick={() => handleAccordionData(index)}
                                >
                                    <h4><FontAwesomeIcon icon={activeIndex === index ? faMinusCircle : faPlusCircle} /></h4>
                                    <div className='switch-page-faq-section-right-content-faq-boxs-body'>
                                        <h4>{data?.title}</h4>
                                        {
                                            activeIndex === index && data?.contentData?.map((data, index) => (
                                                <>
                                                    <p key={index}>{data?.content}</p>
                                                    {
                                                        data?.listData?.map((listData, index) => (
                                                            <li key={index}>{listData?.listContent}</li>
                                                        ))
                                                    }
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwitchPageFAQSection
