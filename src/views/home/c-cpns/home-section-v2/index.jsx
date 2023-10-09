import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import SectionTabs from '@/components/section-tabs/index'
import RoomItem from '@/components/room-item/index'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer/index'


const HomeSectionV2 = memo((props) => {
    const { roomInfo } = props

    const nameArray = roomInfo?.dest_address?.map(item => item.name)

    const [name, setNameState] = useState(nameArray[0])
    const setActiveNameFn = useCallback(function (_name) {
        setNameState(_name)
    }, [])

    return (
        <div>
            <SectionHeader title={roomInfo?.title} subTitle={roomInfo?.subtitle} />
            <SectionTabs tabNames={nameArray} activeNameFn={setActiveNameFn} />
            <RoomItem roomList={roomInfo?.dest_list?.[name]} roomItemWidth='33.3333%' />
            <SectionFooter text={name + '房源'} path={'/detail'} />
        </div>
    )
})

HomeSectionV2.propTypes = {
    roomInfo: PropTypes.object
}

export default HomeSectionV2