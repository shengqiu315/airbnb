import React, { memo } from 'react'
import PropTypes from 'prop-types'

import SectionHeader from '@/components/section-header/index'
import RoomItem from '@/components/room-item/index'
import SectionFooter from '@/components/section-footer/index'


const index = memo((props) => {
    const { roomInfo } = props
    return (
        <div>
            <SectionHeader title={roomInfo?.title} subTitle={roomInfo?.subtitle} />
            <RoomItem roomList={roomInfo?.list} />
            <SectionFooter></SectionFooter>
        </div>
    )
})

index.propTypes = {
    roomInfo: PropTypes.object
}

export default index