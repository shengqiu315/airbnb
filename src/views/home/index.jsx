import React, { memo, useEffect } from 'react'
import { request } from 'utils'
import { HomeWarpper } from './style'
import { BannerWarpper } from './c-cpns/home-banner/style'

const Home = memo(() => {


    return (
        <HomeWarpper>
            <BannerWarpper></BannerWarpper>
        </HomeWarpper>
    )
})

export default Home