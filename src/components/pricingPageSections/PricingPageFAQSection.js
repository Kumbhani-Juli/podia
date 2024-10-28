import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const PricingPageFAQSection = () => {
    const sectionData = [
        {
            title: "Is it easy to change plans?",
            contentData: [
                { content: "It sure is. You can upgrade, downgrade, or switch from monthly to annual billing at any time." },
            ]
        },
        {
            title: "I tried Podia and it wasn't for me. Can I have a refund?",
            contentData: [
                { content: "We offer a free trial so that you can take Podia for a spin! If you sign up for a paid plan and would like a refund, please contact us within 72 hours after your monthly (or annual) renewal or upgrade, and we’ll be happy to refund the most recent payment." },
                { content: "Note: we do not offer pro-rated refunds for annual payments. Refunds take 5-10 business days to process." },
                { content: "If you’d like to cancel your plan, you can do so at any time. Just login to your Podia account, go to “account settings” and visit the “billing” section to cancel." },
            ]
        },
        {
            title: "Are there any transaction fees or payment processing fees?",
            contentData: [
                { content: "On the Mover plan, we charge a 5% transaction fee. There are no Podia fees on the Shaker plan." },
                { content: "Your payment processor (Stripe or PayPal) will charge a standard transaction fee of 2.9% + 30¢, which may vary based on your location. The fees are charged by the processor and are not associated with Podia." },
            ]
        },
        {
            title: "Can I buy Podia Email without buying a Mover or Shaker plan?",
            contentData: [
                {
                    content: "You need a Mover or Shaker plan to use Podia Email beyond your 30-day free trial. All Podia plans and the free trial come with Podia Email free for up to 100 subscribers. After your free trial ends, you'll need to pick either a Mover or Shaker plan to continue using Podia Email, and you can always add on more subscribers as your list grows.",
                },
            ]
        },
        {
            title: "What happens when I reach the subscriber limit of my Podia Email plan?",
            contentData: [
                { content: "You will receive a notification email as you approach the maximum number of subscribers for your plan. Once the limit is reached, you will be able to upgrade to the next plan tier for more subscribers. You will never be upgraded automatically, and you can downgrade to a lower plan tier whenever you want!" },
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
    ]
    // const [showContent, setShowContent] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const handleAccordionData = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
    return (
        <>
            <div className='switch-page-faq-section-container'
                style={{
                    backgroundColor: '#e5d7f5',
                }}
            >
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

export default PricingPageFAQSection
