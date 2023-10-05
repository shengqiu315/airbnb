import React, { memo } from 'react'
import { HeaderWarpper } from './style'
import HeaderLeft from './c-cpns/header-left/index.jsx'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
const index = memo(() => {
    return (
        <HeaderWarpper>
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </HeaderWarpper>
    )
})

export default index