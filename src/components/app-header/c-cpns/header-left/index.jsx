import React, { memo } from 'react'
import { LeftWarpper } from './style'
import { useNavigate } from 'react-router-dom'
import IconLogo from '@/assets/svg/icon_logo'
const HeaderLeft = memo(() => {
    const navigate = useNavigate()
    function clickLogoHandle() {
        navigate('/home')
    }
    return (
        <LeftWarpper>
            <div className='logo' onClick={clickLogoHandle}>
                <IconLogo />
            </div>
        </LeftWarpper>
    )
})

export default HeaderLeft