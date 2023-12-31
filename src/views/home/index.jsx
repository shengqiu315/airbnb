import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { HomeWarpper } from './style'
import { BannerWarpper } from './c-cpns/home-banner/style'
import HomeSectionV1 from './c-cpns/home-section-v1/index'
import HomeSectionV2 from './c-cpns/home-section-v2/index'
import HomeSectionV3 from './c-cpns/home-section-v3/index'
import HomeLongFor from './c-cpns/home-longfor/index'
import { fetchHomeGoodPrice } from '@/store'
import { isEmptyO } from '@/utils'

const Home = memo(() => {
    const { goodPrice, highScore, discount, longFor, hotrecommenddest, plusInfo } = useSelector((state) => ({
        goodPrice: state.homeStore.goodPrice,
        highScore: state.homeStore.highScore,
        discount: state.homeStore.discount,
        longFor: state.homeStore.longFor,
        hotrecommenddest: state.homeStore.hotrecommenddest,
        plusInfo: state.homeStore.plusInfo

    }), shallowEqual)

    const dispath = useDispatch()

    useEffect(() => {
        dispath(fetchHomeGoodPrice())
    }, [dispath])

    return (
        <HomeWarpper>
            <BannerWarpper></BannerWarpper>
            <div className="content">
                {isEmptyO(discount) && <HomeSectionV2 roomInfo={discount} />}
                {isEmptyO(hotrecommenddest) && <HomeSectionV2 roomInfo={hotrecommenddest} />}
                {isEmptyO(longFor) && <HomeLongFor infoData={longFor} />}
                {isEmptyO(goodPrice) && <HomeSectionV1 roomInfo={goodPrice} />}
                {isEmptyO(highScore) && <HomeSectionV1 roomInfo={highScore} />}
                {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}

            </div>
        </HomeWarpper>
    )
})

export default Home