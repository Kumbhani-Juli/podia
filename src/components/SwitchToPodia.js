import React from 'react'
import SwitchPageTopSection from './switchToPodiaPageSections/SwitchPageTopSection'
import SwitchPageIntegrationSection from './switchToPodiaPageSections/SwitchPageIntegrationSection'
import SwitchPageMigrationSection from './switchToPodiaPageSections/SwitchPageMigrationSection'
import SwitchPageMiddleSection from './switchToPodiaPageSections/SwitchPageMiddleSection'
import SwitchPageStartFreeTrailOneSection from './switchToPodiaPageSections/SwitchPageStartFreeTrailOneSection'
import SwitchPageFAQSection from './switchToPodiaPageSections/SwitchPageFAQSection'
import SwitchPageStartFreeTrailTwoSection from './switchToPodiaPageSections/SwitchPageStartFreeTrailTwoSection'

const SwitchToPodia = () => {
    return (
        <>
            <SwitchPageTopSection />
            <SwitchPageIntegrationSection />
            <SwitchPageMigrationSection />
            <SwitchPageMiddleSection />
            <SwitchPageStartFreeTrailOneSection />
            <SwitchPageFAQSection />
            <SwitchPageStartFreeTrailTwoSection />
        </>
    )
}

export default SwitchToPodia
