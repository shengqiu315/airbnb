import React, { memo } from 'react'
import { CenterWarpper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
const HeaderCenter = memo(() => {
    return (
        <CenterWarpper>
            <div className="text">搜索房源和体验</div>
            <div className="search-icon">
                <IconSearchBar />
            </div>
        </CenterWarpper>
    )
})

export default HeaderCenter