import React from 'react'
import sectionImg from '../../assets/images/switchPageImgs/startFreeTrailSectionImg1.avif'
import '../../assets/styles/switchToPodiaSectionsCSS/switchPageStartFreeTrailOneSection.css'

const SwitchPageStartFreeTrailOneSection = () => {
    return (
        <>
            <div className='switch-page-start-free-trail-one-section-container'>
                <div className='switch-page-start-free-trail-one-section-content'>
                    <div className='switch-page-start-free-trail-one-section-left-content'>
                        <img src={sectionImg} alt='section-img' />
                    </div>
                    <div className='switch-page-start-free-trail-one-section-right-content'>
                        <h1>With all the features I need in one place and so many easy to use tools, I just couldn’t be happier!</h1>
                        <p>More than 150,000 entrepreneurs — including creators, coaches, consultants, and many more — grow their business on Podia. Get everything you need in a single platform.</p>
                        <small>Geeji Williams Sprinkledbz</small><br />
                        <button>Start your free trial</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwitchPageStartFreeTrailOneSection
