import React, { memo } from 'react'
import { LeftWarpper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
const HeaderLeft = memo(() => {
    return (
        <LeftWarpper>
            <div className='logo'>
                <IconLogo />
            </div>
        </LeftWarpper>
    )
})

export default HeaderLeft