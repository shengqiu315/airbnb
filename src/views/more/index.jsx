import React, { memo } from 'react'
import MoreFilter from './c-cpns/more-filter/index'
import MoreSection from './c-cpns/more-section/index'
const More = memo(() => {
    return (
        <div>
            <MoreFilter></MoreFilter>
            <MoreSection></MoreSection>
        </div>
    )
})

export default More