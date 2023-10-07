import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { HomeWarpper } from './style'
import { BannerWarpper } from './c-cpns/home-banner/style'
import SectionHeader from '@/components/section-header/index'
import RoomItem from '@/components/room-item/index'
import { fetchHomeGoodPrice } from '@/store'

const Home = memo(() => {
    const dispath = useDispatch()
    useEffect(() => {
        dispath(fetchHomeGoodPrice())
    }, [dispath])
    const { goodPrice } = useSelector((state) => {
        return {
            goodPrice: state.homeStore.goodPrice
        }
    })
    return (
        <HomeWarpper>
            <BannerWarpper></BannerWarpper>
            <div className="content">
                <SectionHeader title={goodPrice?.title} />
                <RoomItem roomList={goodPrice?.list} />
            </div>


        </HomeWarpper>
    )
})

export default Home