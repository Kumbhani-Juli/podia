import React, { useState } from 'react';
import '../../assets/styles/pricingPageSectionCSS/pricingPageTopSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faClose, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const PricingPageTopSection = () => {
    const [isYearly, setIsYearly] = useState(true);

    const handleToggle = () => {
        setIsYearly(!isYearly);
    };

    const sectionData = [
        {
            title: "Mover",
            YearlyPrice: "$33",
            price: "$39",
            fees: "5%",
            bgColor: "#e39a4d",
            color: "#452623",
            borderRadiusRight: false,
            itemList: [
                { content: "Website" },
                { content: "Online store" },
                { content: "Email marketing" },
                { content: "Unlimited products" },
                { content: "Blog" },
                { content: "Custom domain" },
                { content: "7-days-a-week support" },
                { content: "No affiliate marketing", disable: true },
            ]
        },
        {
            title: "Shaker",
            YearlyPrice: "$75",
            price: "$89",
            fees: "No",
            borderRadiusLeft: false,
            bgColor: "#cbb0eb",
            color: "#1f1738",
            itemList: [
                { content: "Website" },
                { content: "Online store" },
                { content: "Email marketing" },
                { content: "Unlimited products" },
                { content: "Blog" },
                { content: "Custom domain" },
                { content: "7-days-a-week support" },
                { content: "Affiliate marketing" },
            ]
        }
    ]
    return (
        <div className='pricing-page-top-section-container'>
            <div className='pricing-page-top-section-title'>
                <h1>Run your entire business from one platform</h1>
                <p>Start with a 30-day free trial that includes every feature, then pick the plan that’s right for you.</p>
                <button>Start your free 30-day trial</button>
                <div className='pricing-page-top-section-title-toggle-swtich-section'>
                    <label className='toggle-switch'>
                        <input type='checkbox' checked={isYearly} onChange={handleToggle} />
                        <span className='slider'
                            style={{ backgroundColor: isYearly === false ? '#cbb0eb' : '' }}
                        ></span>
                    </label>
                    <span>Save with yearly billing</span>
                </div>
            </div>
            <div className='pricing-page-top-section-content'>
                {
                    sectionData?.map((data, index) => (
                        <div className='pricing-page-top-section-content-boxs'
                            style={{
                                backgroundColor: data?.bgColor ? data.bgColor : '',
                                color: data?.color ? data.color : '',
                                borderTopRightRadius: data?.borderRadiusRight === false ? '0' : '',
                                borderBottomRightRadius: data?.borderRadiusRight === false ? '0' : '',
                                borderTopLeftRadius: data?.borderRadiusLeft === false ? '0' : '',
                                borderBottomLeftRadius: data?.borderRadiusLeft === false ? '0' : '',
                            }}
                            key={index}>
                            <div className='pricing-page-top-section-content-boxs-top-section'>
                                <h1>{data?.title}</h1>
                                <div className='pricing-page-top-section-content-boxs-top-section-left'>
                                    <p>{isYearly ? data?.YearlyPrice : data?.price}/mo</p>
                                    <small>{data?.fees} transaction fees</small>
                                </div>
                            </div>
                            <div className='pricing-page-top-section-content-boxs-body'>
                                {
                                    data?.itemList?.map((data, index) => (
                                        <div className='pricing-page-top-section-content-boxs-body-list-items'
                                            style={{
                                                color: data?.disable === true ? '#855434' : '',
                                            }}
                                            key={index}>
                                            <FontAwesomeIcon icon={data?.disable === true ? faClose : faSquareCheck} />
                                            <p>{data?.content}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                <div className='pricing-page-top-section-content-boxs'
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: '30px',
                        padding: '2rem',
                        marginLeft: '1rem'
                    }}
                >
                    <div className='pricing-page-top-section-content-boxs-top-section'>
                        <h1>Podia Email</h1>
                    </div>
                    <div className='pricing-page-top-section-content-boxs-body'>
                        <p>Both plans come with our powerful email platform for free and include:</p>
                        <div className='pricing-page-top-section-content-boxs-body-list-items'>
                            <FontAwesomeIcon icon={faSquareCheck} />
                            <p>Beautiful email designs</p>
                        </div>
                        <div className='pricing-page-top-section-content-boxs-body-list-items'>
                            <FontAwesomeIcon icon={faSquareCheck} />
                            <p>Email automations</p>
                        </div>
                        <div className='pricing-page-top-section-content-boxs-body-list-items'>
                            <FontAwesomeIcon icon={faSquareCheck} />
                            <p>Analytics and sales metrics</p>
                        </div>
                        <div className='pricing-page-top-section-content-boxs-body-list-items'>
                            <FontAwesomeIcon icon={faChevronDown} />
                            <p>View all email features</p>
                        </div>
                    </div>
                    <p>FREE</p>
                </div>
            </div>
        </div>
    );
};

export default PricingPageTopSection;
